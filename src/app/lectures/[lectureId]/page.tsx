import { lectureData } from "@/data/lectures";
import { notFound } from "next/navigation";

export default async function LecturePage({ params }: { params: { lectureId: string } }) {
const decodedLectureId = decodeURIComponent((params).lectureId);

let foundLecture: any = null;

const summaryLinks = {
  "Class 7 2025-2026: Algebra: Linear Equations 1: Intro to Linear Equations in One Variable": "https://docs.google.com/document/d/1SLZCTswY7iO6WzANjgViyHTQG1teA08dpwM7AucwZKk/edit?usp=gmail",
  "Class 7 2025-2026: Algebra: Linear Equations 2: Linear Equations and Fractions": "https://docs.google.com/document/d/1eCz-HewcgY62rrEa0oPCeoT14hSuQ9UaLk-4AhXhDZk/edit?usp=drive_link",
  "Class 7 2025-2026: Algebra: Linear Equations 3: Linear Equations and Fractions continued": "https://docs.google.com/document/d/1aE5EFTL2blOes6cv-yum56AK0NWaupU-eg2kjNYk5n8/edit?tab=t.0",
  "Class 7 2025-2026: Algebra: Linear Equations 4: Linear Equations (New Method)":"https://docs.google.com/document/d/1z6miQXXpWwYzhkD7noFFVQwxw8EaMdgPqLksXOPVP4o/edit?tab=t.0",
  "Class 7 2025-2026: Algebra: Linear Equations 5: Distributive Property":"https://docs.google.com/document/d/1BTr-Yra740fUJQzgBFaayPJqEzXZUUKKJYwKZwVsiZ8/edit?tab=t.0",
  "Class 7 2025-2026: Algebra: Linear Equations 6: Distributive Property Practice":"https://docs.google.com/document/d/1EfG7_2lNwQgc8rcgKDSFLsjdrsC4q5apX_Piipnl_Wc/edit?tab=t.0",
  "Class 7 2025-2026: Algebra: Linear Equations 7: Brackets":"https://docs.google.com/document/d/19OO0EWFlMPtc60AFZSb51dtS2svcXiILuWD4vQxzpao/edit?tab=t.0",
  "Class 7 2025-2026: Algebra: Linear Equations 8: Brackets and Signs":"https://docs.google.com/document/d/14FRSRpxoy_0tSyTeAxRcXNY-fV7EROpkCOb_f7BoZOc/edit?tab=t.0",
  "Class 7 2025-2026: Algebra: Linear Equations 9: Variable Multiplication":"https://docs.google.com/document/d/1My9mz9pbWWpnDjvxNruVijUsAuDmxa71KK88HlkmxZ8/edit?tab=t.0",
  "Class 7 2025-2026: Algebra: Linear Equations 10: Like and Unlike terms":"https://docs.google.com/document/d/1Z68h7XijjEfPejzII7MSdT8tWTzAs9LR4S3j1fsCTvA/edit?tab=t.0"
 }


for (const cls of lectureData) {
  for (const subj of cls.subjects) {
    for (const topic of subj.topics) {
      for (const sub of topic.subTopics) {
        for (const lec of sub.lectures) {
          if (lec.id === decodedLectureId) {
            foundLecture = lec;
            break;
          }
        }
      }
    }
  }
}

if (!foundLecture) return notFound();

  function timestampToSeconds(time: string): number {
    const parts = time.split(":").map(Number);
    return parts.length === 3
      ? parts[0] * 3600 + parts[1] * 60 + parts[2]
      : parts[0] * 60 + parts[1];
  }

  const lectureName = foundLecture.name;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-2">{foundLecture.name}</h1>

      <a
        href={foundLecture.videoLink}
        target="_blank"
        className="text-blue-600 underline"
      >
        ▶ Watch Lecture on YouTube
      </a>

      <div className="mt-4 space-y-1 text-sm">
        {foundLecture.summaryLink && (
          <p>
            <strong>Lecture Notes:</strong>{" "}
            <a
              href={foundLecture.summaryLink}
              target="_blank"
              className="text-blue-600 underline"
            >
              View
            </a>
          </p>
        )}
        {foundLecture.homeworkLink && (
          <p>
            <strong>Homework:</strong>{" "}
            <a
              href={foundLecture.homeworkLink}
              target="_blank"
              className="text-blue-600 underline"
            >
              View
            </a>
          </p>
        )}
        {foundLecture.answerKeyLink && (
          <p>
            <strong>Answer Key:</strong>{" "}
            <a
              href={foundLecture.answerKeyLink}
              target="_blank"
              className="text-blue-600 underline"
            >
              View
            </a>
          </p>
        )}

        {summaryLinks[lectureName] && (
          <p>
            <strong>Summary Link:</strong>{" "}
            <a
              href={summaryLinks[lectureName]}
              target="_blank"
              className="text-blue-600 underline"
            >
              View
            </a>
          </p>
        )}
      </div>

      {Array.isArray(foundLecture.timestamps) && foundLecture.timestamps.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Timestamps</h2>
          <ul className="list-disc list-inside space-y-1">
            {foundLecture.timestamps.map((ts: any, idx: number) => {
              const startSec = timestampToSeconds(ts.start);
              const videoWithTime = `${foundLecture.videoLink}&t=${startSec}s`;
              return (
                <li key={idx}>
                  <a
                    href={videoWithTime}
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    {ts.start} - {ts.end}: {ts.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  return lectureData.flatMap((cls) =>
    cls.subjects.flatMap((subj) =>
      subj.topics.flatMap((topic) =>
        topic.subTopics.flatMap((sub) =>
          sub.lectures.map((lec) => ({
            lectureId: lec.id,
          }))
        )
      )
    )
  );
}

export const dynamic = "force-static";