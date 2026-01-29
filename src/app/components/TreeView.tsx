"use client"
import React, { useState } from 'react';

type TreeNode = {
  id: string;
  name: string;
  url?: string;
  children?: TreeNode[];
};

const treeData: TreeNode[] = [
  {
    id: 'class7',
    name: 'Class 7',
    children: [
      {
        id: 'math',
        name: 'Math',
        children: [
          {
            id: 'Pre-algebra',
            name: 'Pre-Algebra',
            children: [
              {
                id: 'lecture1',
                name: 'Lecture 1',
                children: [
                  {
                    id: 'video1',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video1_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=b7iAwrJEuxY&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi',
                      },
                    ],
                  },
                  {
                    id: 'topics1',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic1_1',
                        name: '0:00 - Question 1: Fractions',
                        url: 'https://www.youtube.com/watch?v=b7iAwrJEuxY&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=2',
                      },
                      {
                        id: 'topic1_2',
                        name: '6:33 - Question 2: Fractions',
                        url: 'https://www.youtube.com/watch?v=b7iAwrJEuxY&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=2&t=393s',
                      },
                      {
                        id: 'topic1_3',
                        name: '20:58 - Question 3: Fractions',
                        url: 'https://www.youtube.com/watch?v=b7iAwrJEuxY&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=2&t=1258s',
                      },
                      {
                        id: 'topic1_4',
                        name: '31:33 - Question 4: Mixed Fractions',
                        url: 'https://www.youtube.com/watch?v=b7iAwrJEuxY&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=2&t=1893s',
                      },
                      {
                        id: 'topic1_5',
                        name: '45:02 - Question 5: Mixed Fractions and Decimals',
                        url: 'https://www.youtube.com/watch?v=b7iAwrJEuxY&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=2&t=2702s',
                      },
                      {
                        id: 'topic1_6',
                        name: '56:29: - Question 6: Mixed Fractions and Decimals Last Question',
                        url: 'https://www.youtube.com/watch?v=b7iAwrJEuxY&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=2&t=3389s',
                      },
                    ],
                  },
                  {
                    id: 'summary1',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary1_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1SLZCTswY7iO6WzANjgViyHTQG1teA08dpwM7AucwZKk/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework1',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework1_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1AFo1b6NbFwlYrjlztV51kgpUa-26wVy0YrD16EFkWCM/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture2',
                name: 'Lecture 2',
                children: [
                  {
                    id: 'video2',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video2_content',
                        name: 'Watch Full Video',
                        url: 'https://youtu.be/wXbgkokBvZc?si=bzJTOYOjs2_OYJUa',
                      },
                    ],
                  },
                  {
                    id: 'topics2',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic2_1',
                        name: '0:00 - Homework Discussion',
                        url: 'https://www.youtube.com/watch?v=wXbgkokBvZc&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=3',
                      },
                      {
                        id: 'topic2_2',
                        name: '14:33 - Decimals, Fractions and Brackets',
                        url: 'https://www.youtube.com/watch?v=wXbgkokBvZc&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=3&t=873s',
                      },
                      {
                        id: 'topic2_3',
                        name: '24:21 - Practice Question 2',
                        url: 'https://www.youtube.com/watch?v=wXbgkokBvZc&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=3&t=1461s',
                      },
                      {
                        id: 'topic2_4',
                        name: '29:17 - Practice Question 3',
                        url: 'https://www.youtube.com/watch?v=wXbgkokBvZc&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=3&t=1757s',
                      },
                    ],
                  },
                  {
                    id: 'summary2',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary2_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1eCz-HewcgY62rrEa0oPCeoT14hSuQ9UaLk-4AhXhDZk/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework2',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework2_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1LR5ibn5CURPvpvc5Pkr6XuZpj42e_oqDKfpHa8XSV90/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture3',
                name: 'Lecture 3',
                children: [
                  {
                    id: 'video3',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video3_content',
                        name: 'Watch Full Video',
                        url: 'https://youtu.be/YvxiPVl4Zow?si=exezsCgdvaeRjJjD',
                      },
                    ],
                  },
                  {
                    id: 'topics3',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic3_1',
                        name: '0:00 - Homework Discussion',
                        url: 'https://youtu.be/YvxiPVl4Zow?si=exezsCgdvaeRjJjD',
                      },
                      {
                        id: 'topic3_2',
                        name: '14:23 - Practice Question 1',
                        url: 'https://www.youtube.com/watch?v=YvxiPVl4Zow&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=4&t=863s',
                      },
                      {
                        id: 'topic3_3',
                        name: '26:05 - Practice Question 2',
                        url: 'https://www.youtube.com/watch?v=YvxiPVl4Zow&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=4&t=1565s',
                      },
                      {
                        id: 'topic3_4',
                        name: '34:32 - Practice Question 3',
                        url: 'https://www.youtube.com/watch?v=YvxiPVl4Zow&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=4&t=2072s',
                      },
                      {
                        id: 'topic3_5',
                        name: '46:03 - Practice Question 4',
                        url: 'https://www.youtube.com/watch?v=YvxiPVl4Zow&list=PL1id2Mcm3075crezMeXOH2XGF4uJ5u6oi&index=4&t=2763s',
                      },
                    ],
                  },
                  {
                    id: 'summary3',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary3_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1aE5EFTL2blOes6cv-yum56AK0NWaupU-eg2kjNYk5n8/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework3',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework3_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1EvbeuM_dnSSxPyAv7Z8KeskeE9jrzJiDqWghcDWz4dI/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 'algebra',
            name: 'Algebra',
            children: [
              {
                id: 'lecture1',
                name: 'Lecture 1',
                children: [
                  {
                    id: 'video1',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video1_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob',
                      },
                    ],
                  },
                  {
                    id: 'topics1',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic1_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2',
                      },
                      {
                        id: 'topic1_2',
                        name: '3:43 - Question 2',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2&t=223s',
                      },
                      {
                        id: 'topic1_3',
                        name: '8:33 - Question 3',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2&t=513s',
                      },
                      {
                        id: 'topic1_4',
                        name: '14:16 - Question 4',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2&t=856s',
                      },
                      {
                        id: 'topic1_5',
                        name: '19:14 - Question 5',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2&t=1154s',
                      },
                      {
                        id: 'topic1_6',
                        name: '26:59: - Question 6',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2&t=1619s',
                      },
                      {
                        id: 'topic1_7',
                        name: '36:00: - Question 7',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2&t=2160s',
                      },
                      {
                        id: 'topic1_8',
                        name: '44:11: - Question 8',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2&t=2651s',
                      },
                      {
                        id: 'topic1_9',
                        name: '53:10: - Question 9',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2&t=3190s',
                      },
                      {
                        id: 'topic1_10',
                        name: '01:01:42: - Question 10',
                        url: 'https://www.youtube.com/watch?v=6u5CO1NGwDg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2&t=3702s',
                      },
                    ],
                  },
                  {
                    id: 'summary1',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary1_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1z6miQXXpWwYzhkD7noFFVQwxw8EaMdgPqLksXOPVP4o/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework1',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework1_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1fjoXx0Jp3js1LS79amNsOXRcQZ7qoyHFDCLrZo1jsmA/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture2',
                name: 'Lecture 2',
                children: [
                  {
                    id: 'video2',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video2_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=3ci9EThrg7Y&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=2',
                      },
                    ],
                  },
                  {
                    id: 'topics2',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic2_1',
                        name: '0:00 - Homework Discussion',
                        url: 'https://www.youtube.com/watch?v=3ci9EThrg7Y&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=3',
                      },
                      {
                        id: 'topic2_2',
                        name: '8:43 - Question 1',
                        url: 'https://www.youtube.com/watch?v=3ci9EThrg7Y&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=3&t=523s',
                      },
                      {
                        id: 'topic2_3',
                        name: '19:55 - Question 2',
                        url: 'https://www.youtube.com/watch?v=3ci9EThrg7Y&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=3&t=1195s',
                      },
                      {
                        id: 'topic2_4',
                        name: '31:46 - Question 3',
                        url: 'https://www.youtube.com/watch?v=3ci9EThrg7Y&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=3&t=1906s',
                      },
                      {
                        id: 'topic2_5',
                        name: '50:10 - Question 4',
                        url: 'https://www.youtube.com/watch?v=3ci9EThrg7Y&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=3&t=3010s',
                      },
                      {
                        id: 'topic2_6',
                        name: '01:02:27 - Question 5',
                        url: 'https://www.youtube.com/watch?v=3ci9EThrg7Y&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=3&t=3747s',
                      },
                    ],
                  },
                  {
                    id: 'summary2',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary2_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1BTr-Yra740fUJQzgBFaayPJqEzXZUUKKJYwKZwVsiZ8/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework2',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework2_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1Hm_zoyN-unEnthg2vc5qBVsrdeKqorMtGZw3C3guDaE/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture3',
                name: 'Lecture 3',
                children: [
                  {
                    id: 'video3',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video3_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=lnBXmn4DfQ8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=3',
                      },
                    ],
                  },
                  {
                    id: 'topics3',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic3_1',
                        name: '0:00 - Homework Discussion',
                        url: 'https://www.youtube.com/watch?v=lnBXmn4DfQ8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=4',
                      },
                      {
                        id: 'topic3_2',
                        name: '11:06 - Doubt1 Discussion',
                        url: 'https://www.youtube.com/watch?v=lnBXmn4DfQ8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=4&t=666s',
                      },
                      {
                        id: 'topic3_3',
                        name: '16:48 - Doubt2 Discussion',
                        url: 'https://www.youtube.com/watch?v=lnBXmn4DfQ8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=4&t=1008s',
                      },
                      {
                        id: 'topic3_4',
                        name: '19:53 - Doubt3 Discussion',
                        url: 'https://www.youtube.com/watch?v=lnBXmn4DfQ8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=4&t=1193s',
                      },
                      {
                        id: 'topic3_5',
                        name: '23:07 - Question 1',
                        url: 'https://www.youtube.com/watch?v=lnBXmn4DfQ8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=4&t=1387s',
                      },
                      {
                        id: 'topic3_6',
                        name: '37:16 - Practice Questions',
                        url: 'https://www.youtube.com/watch?v=lnBXmn4DfQ8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=4&t=2236s',
                      },
                      {
                        id: 'topic3_7',
                        name: '48:12 - Question 2 (Solved)',
                        url: 'https://www.youtube.com/watch?v=lnBXmn4DfQ8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=4&t=2892s',
                      },
                      {
                        id: 'topic3_8',
                        name: '54:59 - Question 3',
                        url: 'https://www.youtube.com/watch?v=lnBXmn4DfQ8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=4&t=3299s',
                      },
                    ],
                  },
                  {
                    id: 'summary3',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary3_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1EfG7_2lNwQgc8rcgKDSFLsjdrsC4q5apX_Piipnl_Wc/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework3',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework3_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1_btKDY6PpRoRkuWrLPc5osckJXKoDrfCEX6UM5FZD9E/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 4',
                children: [
                  {
                    id: 'video4',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video4_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=2sYu2XH5O5E&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=4',
                      },
                    ],
                  },
                  {
                    id: 'topics4',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic4_1',
                        name: '0:00 - HW Discussion',
                        url: 'https://www.youtube.com/watch?v=2sYu2XH5O5E&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=5',
                      },
                      {
                        id: 'topic4_2',
                        name: '8:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=2sYu2XH5O5E&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=5&t=480s',
                      },
                      {
                        id: 'topic4_3',
                        name: '12:21 - Question 2',
                        url: 'https://www.youtube.com/watch?v=2sYu2XH5O5E&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=5&t=741s',
                      },
                      {
                        id: 'topic4_4',
                        name: '15:02 - Question 3',
                        url: 'https://www.youtube.com/watch?v=2sYu2XH5O5E&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=5&t=902s',
                      },
                      {
                        id: 'topic4_5',
                        name: '18:36 - Question 4',
                        url: 'https://www.youtube.com/watch?v=2sYu2XH5O5E&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=5&t=1116s',
                      },
                      {
                        id: 'topic4_6',
                        name: '29:37 - Intro to new method',
                        url: 'https://www.youtube.com/watch?v=2sYu2XH5O5E&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=5&t=1777s',
                      },
                      {
                        id: 'topic4_7',
                        name: '40:04 - Question 5',
                        url: 'https://www.youtube.com/watch?v=2sYu2XH5O5E&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=5&t=2404s',
                      },
                      {
                        id: 'topic4_8',
                        name: '50:13 - Question 6',
                        url: 'https://www.youtube.com/watch?v=2sYu2XH5O5E&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=5&t=3013s',
                      },
                    ],
                  },
                  {
                    id: 'summary4',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary4_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/19OO0EWFlMPtc60AFZSb51dtS2svcXiILuWD4vQxzpao/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework4',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework4_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/10sMivWdUPA9YnwcPBP2SA7neX9VvsbTLk9ONcqPk5sA/edit?tab=t.0#heading=h.4xkc7ck2m788',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 5',
                children: [
                  {
                    id: 'video5',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video5_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=5',
                      },
                    ],
                  },
                  {
                    id: 'topics5',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic5_1',
                        name: '0:00 - Homework Discussion',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6',
                      },
                      {
                        id: 'topic5_2',
                        name: '6:06 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6&t=366s',
                      },
                      {
                        id: 'topic5_3',
                        name: '8:04 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6&t=484s',
                      },
                      {
                        id: 'topic5_4',
                        name: '12:26 - Distributive property concept',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6&t=746s',
                      },
                      {
                        id: 'topic5_5',
                        name: '22:01 - Pratice Question 1',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6&t=1321s',
                      },
                      {
                        id: 'topic5_6',
                        name: '26:53 - Pratice Question 2',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6&t=1613s',
                      },
                      {
                        id: 'topic5_7',
                        name: '35:14 - Pratice Question 3',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6&t=2114s',
                      },
                      {
                        id: 'topic5_8',
                        name: '38:39 - Pratice Question 4',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6&t=2319s',
                      },
                      {
                        id: 'topic5_',
                        name: '47:29 - Pratice Question 5',
                        url: 'https://www.youtube.com/watch?v=pOr1aKNjIL4&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6&t=2849s',
                      }
                    ],
                  },
                  {
                    id: 'summary5',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary5_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/14FRSRpxoy_0tSyTeAxRcXNY-fV7EROpkCOb_f7BoZOc/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework5',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework5_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1Ht7g5TfwtvU6-4xXAyb98UCHRTw6IRN7bx16_wfAwAc/edit?tab=t.0#heading=h.h363mkvwo5p8',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 6',
                children: [
                  {
                    id: 'video6',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video6_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=6',
                      },
                    ],
                  },
                  {
                    id: 'topics6',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic6_1',
                        name: '0:00 - Homework Discussion',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7',
                      },
                      {
                        id: 'topic6_2',
                        name: '5:51 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=351s',
                      },
                      {
                        id: 'topic6_3',
                        name: '7:06 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=426s',
                      },
                      {
                        id: 'topic6_4',
                        name: '9:28 - Question 1',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=568s',
                      },
                      {
                        id: 'topic6_5',
                        name: '16:39 - Question 2',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=999s',
                      },
                      {
                        id: 'topic6_6',
                        name: '21:26 - Question 3',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=1286s',
                      },
                      {
                        id: 'topic6_7',
                        name: '27:25 - Question 4',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=1645s',
                      },
                      {
                        id: 'topic6_8',
                        name: '31:11 - Question 5',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=1871s',
                      },
                      {
                        id: 'topic6_9',
                        name: '36:12 - Question 6',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=2172s',
                      },
                      {
                        id: 'topic6_10',
                        name: '47:46 - Student Doubt',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=2866s',
                      },
                      {
                        id: 'topic6_11',
                        name: '48:58 - Question 7',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=2938s',
                      },
                      {
                        id: 'topic6_12',
                        name: '1:05:02 - Question 8',
                        url: 'https://www.youtube.com/watch?v=z66EuKnZFSA&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7&t=3902s',
                      }
                    ],
                  },
                  {
                    id: 'summary6',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary6_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1My9mz9pbWWpnDjvxNruVijUsAuDmxa71KK88HlkmxZ8/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework6',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework6_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1g5PIAWeYCkGfBGMHKyIYpMGfzxp34syvxg50w8Eiqhk/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 7',
                children: [
                  {
                    id: 'video7',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video7_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=1oxgqd-r2ak&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=7',
                      },
                    ],
                  },
                  {
                    id: 'topics7',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic7_1',
                        name: '0:00 - Homework Discussion',
                        url: 'https://www.youtube.com/watch?v=1oxgqd-r2ak&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=8',
                      },
                      {
                        id: 'topic7_2',
                        name: '6:49 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=1oxgqd-r2ak&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=8&t=409s',
                      },
                      {
                        id: 'topic7_3',
                        name: '11:22 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=1oxgqd-r2ak&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=8&t=682s',
                      },
                      {
                        id: 'topic7_4',
                        name: '15:04 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=1oxgqd-r2ak&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=8&t=904s',
                      },
                      {
                        id: 'topic7_5',
                        name: '23:22 - Question 1',
                        url: 'https://www.youtube.com/watch?v=1oxgqd-r2ak&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=8&t=1402s',
                      },
                      {
                        id: 'topic7_6',
                        name: '48:14 - Brackets Intro and Question 2',
                        url: 'https://www.youtube.com/watch?v=1oxgqd-r2ak&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=8&t=2894s',
                      },
                      {
                        id: 'topic7_7',
                        name: '1:10:19 - Question 3',
                        url: 'https://www.youtube.com/watch?v=1oxgqd-r2ak&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=8&t=4219s',
                      }
                    ],
                  },
                  {
                    id: 'summary7',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary7_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1Z68h7XijjEfPejzII7MSdT8tWTzAs9LR4S3j1fsCTvA/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework7',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework7_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1lqRdPzZVZrENGOsaXIF97p8JBDoakwJJHe6qUrSZj2s/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 8',
                children: [
                  {
                    id: 'video8',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video8_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=QUj8tDYy_mo&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=8',
                      },
                    ],
                  },
                  {
                    id: 'topics8',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic8_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=QUj8tDYy_mo&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=9',
                      },
                      {
                        id: 'topic8_2',
                        name: '6:27 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=QUj8tDYy_mo&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=9&t=387s',
                      },
                      {
                        id: 'topic8_3',
                        name: '14:45 - Question 1',
                        url: 'https://www.youtube.com/watch?v=QUj8tDYy_mo&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=9&t=885s',
                      },
                      {
                        id: 'topic8_4',
                        name: '43:15 - Question 2',
                        url: 'https://www.youtube.com/watch?v=QUj8tDYy_mo&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=9&t=2595s',
                      },
                      {
                        id: 'topic8_5',
                        name: '53:47 - Brackets and Solution',
                        url: 'https://www.youtube.com/watch?v=QUj8tDYy_mo&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=9&t=3227s',
                      },
                      {
                        id: 'topic8_6',
                        name: '1:01:00 - Question 3',
                        url: 'https://www.youtube.com/watch?v=QUj8tDYy_mo&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=9&t=3660s',
                      }
                    ],
                  },
                  {
                    id: 'summary8',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary8_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1LbgTXP2onyZXLP3nPV34PS9EbwPpXyPvot22YeI2nZY/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework8',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework8_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1QGgz7YirFDfjsI9iwSLOXHFIU_mqCiXSmpI5ZnAII3c/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 9',
                children: [
                  {
                    id: 'video9',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video9_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=OJiqhjZ1IiM&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=9',
                      },
                    ],
                  },
                  {
                    id: 'topics9',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic9_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=OJiqhjZ1IiM&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=10',
                      },
                      {
                        id: 'topic9_2',
                        name: '5:36 - Question 1',
                        url: 'https://www.youtube.com/watch?v=OJiqhjZ1IiM&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=10&t=336s',
                      },
                      {
                        id: 'topic9_3',
                        name: '19:25 - Question 2',
                        url: 'https://www.youtube.com/watch?v=OJiqhjZ1IiM&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=10&t=1165s',
                      },
                      {
                        id: 'topic9_4',
                        name: '35:36 - Question 3',
                        url: 'https://www.youtube.com/watch?v=OJiqhjZ1IiM&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=10&t=2136s',
                      },
                      {
                        id: 'topic9_5',
                        name: '54:03 - Sol. Question 1',
                        url: 'https://www.youtube.com/watch?v=OJiqhjZ1IiM&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=10&t=3243s',
                      },
                      {
                        id: 'topic9_6',
                        name: '58:31 - Question 4',
                        url: 'https://www.youtube.com/watch?v=OJiqhjZ1IiM&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=10&t=3511s',
                      }
                    ],
                  },
                  {
                    id: 'summary9',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary9_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1EHqP67mh04jKB-PbD2ExBbl3nwnNUgpkUrMR92E0SxQ/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework9',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework9_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1AU87288s9FhQx3HhtLjpH_0ocvOMVmC_iHDQ6Y3sHFw/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 10',
                children: [
                  {
                    id: 'video10',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video10_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=CLIP-UxJT5c&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=10',
                      },
                    ],
                  },
                  {
                    id: 'topics10',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic10_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=CLIP-UxJT5c&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=11',
                      },
                      {
                        id: 'topic10_2',
                        name: '6:18 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=CLIP-UxJT5c&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=11&t=378s',
                      },
                      {
                        id: 'topic10_3',
                        name: '11:58 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=CLIP-UxJT5c&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=11&t=718s',
                      },
                      {
                        id: 'topic10_4',
                        name: '16:29 - Intro to word problems',
                        url: 'https://www.youtube.com/watch?v=CLIP-UxJT5c&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=11&t=989s',
                      },
                      {
                        id: 'topic10_5',
                        name: '34:39 - Question 1',
                        url: 'https://www.youtube.com/watch?v=CLIP-UxJT5c&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=11&t=2079s',
                      },
                      {
                        id: 'topic10_6',
                        name: '40:50 - Question 2',
                        url: 'https://www.youtube.com/watch?v=CLIP-UxJT5c&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=11&t=2450s',
                      }
                    ],
                  },
                  {
                    id: 'summary10',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary10_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/15SRsnLb3MkXOW-yFRwzOkQZ9YIFLmfteeo3KZsVdsvY/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework10',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework10_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1eYeIPZRH1ZF5AEe-jjrAZ5jV7Jg1ilYkmu9hc6qXnfc/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'quiz1',
                    name: 'Quiz',
                    children: [
                      {
                        id: 'quiz1_content',
                        name: 'View Quiz Document',
                        url: 'https://docs.google.com/document/d/1NlQWh1qvbmyFYuvlawT3duKW5hdniQHpOrKDLsDe3FM/edit?tab=t.0',
                      },
                    ],
                  }
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 11',
                children: [
                  {
                    id: 'video11',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video11_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=11',
                      },
                    ],
                  },
                  {
                    id: 'topics11',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic11_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12',
                      },
                      {
                        id: 'topic11_2',
                        name: '6:18 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=378s',
                      },
                      {
                        id: 'topic11_3',
                        name: '12:56 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=776s',
                      },
                      {
                        id: 'topic11_4',
                        name: '17:03 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=1023s',
                      },
                      {
                        id: 'topic11_5',
                        name: '22:34 - Quiz Answer Key',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=1354s',
                      },
                      {
                        id: 'topic11_6',
                        name: '25:40 - Quiz Doubt 1',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=1540s',
                      },
                      {
                        id: 'topic11_7',
                        name: '29:28 - Quiz Doubt 2',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=1768s',
                      },
                      {
                        id: 'topic11_8',
                        name: '33:37 - Quiz Doubt 3',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=2017s',
                      },
                      {
                        id: 'topic11_9',
                        name: '40:28 - Quiz Doubt 4',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=2428s',
                      },
                      {
                        id: 'topic11_10',
                        name: '53:31 - Quiz Doubt 5',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=3211s',
                      },
                      {
                        id: 'topic11_11',
                        name: '1:06:23 - Quiz Doubt 6',
                        url: 'https://www.youtube.com/watch?v=MIfQAC528Lc&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12&t=3983s',
                      }
                    ],
                  },
                  {
                    id: 'summary11',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary11_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1qX0YA3UT__gd-9psNXacXrMDGRfE3drAJpzJLgcfClY/edit?tab=t.0#heading=h.cotx6y4uwyrt',
                      },
                    ],
                  },
                  {
                    id: 'homework11',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework11_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1mgWtNHlLcI294QYnLO39Lp55hYCGmM0uqe6M7YHXR0k/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 12',
                children: [
                  {
                    id: 'video12',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video12_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=wCqRtAR8nbg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=12',
                      },
                    ],
                  },
                  {
                    id: 'topics12',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic12_1',
                        name: '0:00 - Homework Check',
                        url: 'https://www.youtube.com/watch?v=wCqRtAR8nbg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=13',
                      },
                      {
                        id: 'topic12_2',
                        name: '6:43 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=wCqRtAR8nbg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=13&t=403s',
                      },
                      {
                        id: 'topic12_3',
                        name: '17:51 - Question 1',
                        url: 'https://www.youtube.com/watch?v=wCqRtAR8nbg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=13&t=1071s',
                      },
                      {
                        id: 'topic12_4',
                        name: '35:43 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=wCqRtAR8nbg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=13&t=2143s',
                      },
                      {
                        id: 'topic12_5',
                        name: '58:47 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=wCqRtAR8nbg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=13&t=3527s',
                      },
                      {
                        id: 'topic12_6',
                        name: '1:03:52 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=wCqRtAR8nbg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=13&t=3832s',
                      }
                    ],
                  },
                  {
                    id: 'summary12',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary12_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1iqepf0Uz1vCcwvAKpazl_3R-l5gCtW3EV-b3YoM84U4/edit?tab=t.0#heading=h.snmvdme7gqii',
                      },
                    ],
                  },
                  {
                    id: 'homework12',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework12_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1hn2H6a0ZD4HdfttUJxvWfyDPbfT8fR8vQS0TG425_Wo/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 13',
                children: [
                  {
                    id: 'video13',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video13_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=13',
                      },
                    ],
                  },
                  {
                    id: 'topics13',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic13_1',
                        name: '0:00 - Homework Check',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14',
                      },
                      {
                        id: 'topic13_2',
                        name: '6:57 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14&t=417s',
                      },
                      {
                        id: 'topic13_3',
                        name: '13:40 - Question 1',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14&t=820s',
                      },
                      {
                        id: 'topic13_4',
                        name: '28:36 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14&t=1716s',
                      },
                      {
                        id: 'topic13_5',
                        name: '40:57 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14&t=2457s',
                      },
                      {
                        id: 'topic13_6',
                        name: '55:27 - Recap Question',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14&t=3327s',
                      },
                      {
                        id: 'topic13_7',
                        name: '1:03:26 - Recap Question 2',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14&t=3806s',
                      },
                      {
                        id: 'topic13_8',
                        name: '1:11:28 - Concept',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14&t=4288s',
                      },
                      {
                        id: 'topic13_9',
                        name: '1:12:30 - Question 2',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14&t=4350s',
                      },
                      {
                        id: 'topic13_10',
                        name: '1:20:33 - Question 3',
                        url: 'https://www.youtube.com/watch?v=iBKVjyGJ-is&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14&t=4833s',
                      }
                    ],
                  },
                  {
                    id: 'summary13',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary13_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1jIbx_dnzxpHmkYKyOdIyuHhUZGoQp0UV2cpP5NWYJZ0/edit?tab=t.0#heading=h.yjl8dwi2oey2',
                      },
                    ],
                  },
                  {
                    id: 'homework13',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework13_content',
                        name: 'No Homework was assigned',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 14',
                children: [
                  {
                    id: 'video14',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video14_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=14',
                      },
                    ],
                  },
                  {
                    id: 'topics14',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic14_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15',
                      },
                      {
                        id: 'topic14_2',
                        name: '13:40 - Question 2',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15&t=820s',
                      },
                      {
                        id: 'topic14_3',
                        name: '19:40 - Question 3',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15&t=1180s',
                      },
                      {
                        id: 'topic14_4',
                        name: '28:14 - Question 4',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15&t=1694s',
                      },
                      {
                        id: 'topic14_5',
                        name: '36:51 - Question 5',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15&t=2211s',
                      },
                      {
                        id: 'topic14_6',
                        name: '47:10 - Question 6',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15&t=2830s',
                      },
                      {
                        id: 'topic14_7',
                        name: '53:21 - Question 7',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15&t=3201s',
                      },
                      {
                        id: 'topic14_8',
                        name: '56:23 - Question 8',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15&t=3383s',
                      },
                      {
                        id: 'topic14_9',
                        name: '1:01:44 - Question 9',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15&t=3704s',
                      },
                      {
                        id: 'topic14_10',
                        name: '1:07:58 - Question 10',
                        url: 'https://www.youtube.com/watch?v=3SMgiVYZCxU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15&t=4078s',
                      }
                    ],
                  },
                  {
                    id: 'summary14',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary14_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1oFQLH40rDthSKrGXfWLrMDdarehU3cFIsT1U5aC09oc/edit?tab=t.0#heading=h.nqvvcntmipli',
                      },
                    ],
                  },
                  {
                    id: 'homework14',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework14_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1DfhFVbghsouSFGeLPTDBlYy-HNv_BV7uQ3cBflx_Nn4/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 15',
                children: [
                  {
                    id: 'video15',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video15_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=15',
                      },
                    ],
                  },
                  {
                    id: 'topics15',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic15_1',
                        name: '0:00 - Homework Check',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16',
                      },
                      {
                        id: 'topic15_2',
                        name: '4:31 - Question 1',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16&t=271s',
                      },
                      {
                        id: 'topic15_3',
                        name: '6:46 - Question 2',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16&t=735s',
                      },
                      {
                        id: 'topic15_4',
                        name: '12:15 - Question 3',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16&t=735s',
                      },
                      {
                        id: 'topic15_5',
                        name: '22:08 - Concept+Question 4',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16&t=1328s',
                      },
                      {
                        id: 'topic15_6',
                        name: '37:41 - Question 5',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16&t=2261s',
                      },
                      {
                        id: 'topic15_7',
                        name: '42:59 - Question 6',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16&t=2579s',
                      },
                      {
                        id: 'topic15_8',
                        name: '49:02 - Question 7',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16&t=2942s',
                      },
                      {
                        id: 'topic15_9',
                        name: '55:05 - Question 8',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16&t=3305s',
                      },
                      {
                        id: 'topic15_10',
                        name: '59:13 - Question 9',
                        url: 'https://www.youtube.com/watch?v=4vvDs7s_NE8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16&t=3553s',
                      }
                    ],
                  },
                  {
                    id: 'summary15',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary15_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1TyICooqyTG3J3-cUPgHwCGc3-ckV7-sALuj59WWAUlg/edit?tab=t.0#heading=h.72hmnat3ebat',
                      },
                    ],
                  },
                  {
                    id: 'homework15',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework15_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1QhQ62MXrI891bKd_k0eKWq5JnS1Jh7lw6tBJuUXmNtE/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 16',
                children: [
                  {
                    id: 'video16',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video16_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=5T-Qd634qdI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=16',
                      },
                    ],
                  },
                  {
                    id: 'topics16',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic16_1',
                        name: '0:00 - Homework Discussion',
                        url: 'https://www.youtube.com/watch?v=5T-Qd634qdI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=17',
                      },
                      {
                        id: 'topic16_2',
                        name: '3:50 - Concept',
                        url: 'https://www.youtube.com/watch?v=5T-Qd634qdI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=17&t=230s',
                      },
                      {
                        id: 'topic16_3',
                        name: '6:10 - Question 1',
                        url: 'https://www.youtube.com/watch?v=5T-Qd634qdI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=17&t=370s',
                      }
                    ],
                  },
                  {
                    id: 'summary16',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary16_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1TIYz4QYXplBBQnFBAjfiamGLMgV8pKGxEcAsBRLL3wY/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework16',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework16_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1BG2jW7O43DJjGtgfEodgvawRhcxblRCaC07kApAJZeA/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 17',
                children: [
                  {
                    id: 'video17',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video17_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=qar90widxio&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=17',
                      },
                    ],
                  },
                  {
                    id: 'topics17',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic17_1',
                        name: '0:00 - Homework Check',
                        url: 'https://www.youtube.com/watch?v=qar90widxio&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=18',
                      },
                      {
                        id: 'topic17_2',
                        name: '5:10 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=qar90widxio&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=18&t=310s',
                      },
                      {
                        id: 'topic17_3',
                        name: '8:23 - Recap Question 1',
                        url: 'https://www.youtube.com/watch?v=qar90widxio&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=18&t=503s',
                      },
                      {
                        id: 'topic17_4',
                        name: '20:26 - Question 2',
                        url: 'https://www.youtube.com/watch?v=qar90widxio&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=18&t=1226s',
                      },
                      {
                        id: 'topic17_5',
                        name: '42:10 - Question 3',
                        url: 'https://www.youtube.com/watch?v=qar90widxio&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=18&t=2530s',
                      },
                      {
                        id: 'topic17_6',
                        name: '56:41 - Question 4',
                        url: 'https://www.youtube.com/watch?v=qar90widxio&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=18&t=3401s',
                      }
                    ],
                  },
                  {
                    id: 'summary17',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary17_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1HgPZLwGVd2YuzPJ-uajQW8D9rL570n0tVVHQAE4Jc6c/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework17',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework17_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1InBzxW12WYLoZWMapTOn50yxh3Hm9Q3yEPHlmgoCHko/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 18',
                children: [
                  {
                    id: 'video18',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video18_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=hPhVjZxcFRU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=18',
                      },
                    ],
                  },
                  {
                    id: 'topics18',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic18_1',
                        name: '0:00 - Homework Check',
                        url: 'https://www.youtube.com/watch?v=hPhVjZxcFRU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=19',
                      },
                      {
                        id: 'topic18_2',
                        name: '5:31 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=hPhVjZxcFRU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=19&t=331s',
                      },
                      {
                        id: 'topic18_3',
                        name: '7:36 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=hPhVjZxcFRU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=19&t=456s',
                      },
                      {
                        id: 'topic18_4',
                        name: '12:58 - Question 1',
                        url: 'https://www.youtube.com/watch?v=hPhVjZxcFRU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=19&t=778s',
                      },
                      {
                        id: 'topic18_5',
                        name: '31:20 - Question 2',
                        url: 'https://www.youtube.com/watch?v=hPhVjZxcFRU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=19&t=1880s',
                      },
                      {
                        id: 'topic18_6',
                        name: '47:59 - Question 3',
                        url: 'https://www.youtube.com/watch?v=hPhVjZxcFRU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=19&t=2879s',
                      },
                      {
                        id: 'topic18_7',
                        name: '1:08:01 - Question 4',
                        url: 'https://www.youtube.com/watch?v=hPhVjZxcFRU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=19&t=4081s',
                      }
                    ],
                  },
                  {
                    id: 'summary18',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary18_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1WL92_MKhTjGg5aypTH2JzRmPQ4d1nupK7-zqPJAgRNk/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework18',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework18_content',
                        name: 'No Homework was given',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 19',
                children: [
                  {
                    id: 'video19',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video19_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=enVeHI4pdPs&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=19',
                      },
                    ],
                  },
                  {
                    id: 'topics19',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic19_1',
                        name: '0:00 - General Discussion',
                        url: 'https://www.youtube.com/watch?v=enVeHI4pdPs&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=20',
                      },
                      {
                        id: 'topic19_2',
                        name: '1:44 - Recap Problem 1',
                        url: 'https://www.youtube.com/watch?v=enVeHI4pdPs&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=20&t=104s',
                      },
                      {
                        id: 'topic19_3',
                        name: '27:01 - Recap Problem 2',
                        url: 'https://www.youtube.com/watch?v=enVeHI4pdPs&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=20&t=1621s',
                      },
                      {
                        id: 'topic19_4',
                        name: '46:50 - Recap Problem 2 Solution',
                        url: 'https://www.youtube.com/watch?v=enVeHI4pdPs&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=20&t=2810s',
                      },
                      {
                        id: 'topic19_5',
                        name: '48:38 - Recap Problem 3',
                        url: 'https://www.youtube.com/watch?v=enVeHI4pdPs&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=20&t=2918s',
                      },
                      {
                        id: 'topic19_6',
                        name: '57:06 - Recap Problem 3 Solution',
                        url: 'https://www.youtube.com/watch?v=enVeHI4pdPs&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=20&t=3426s',
                      },
                      {
                        id: 'topic19_7',
                        name: '1:02:33 - Recap Problem 4',
                        url: 'https://www.youtube.com/watch?v=enVeHI4pdPs&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=20&t=3753s',
                      },
                      {
                        id: 'topic19_8',
                        name: '1:10:55 - Recap Problem 4 Solution',
                        url: 'https://www.youtube.com/watch?v=enVeHI4pdPs&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=20&t=4255s',
                      }
                    ],
                  },
                  {
                    id: 'summary19',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary19_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1WL92_MKhTjGg5aypTH2JzRmPQ4d1nupK7-zqPJAgRNk/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework19',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework19_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1cAocKh7SA3nAtEg0vaYX9pcehcmJmNw_yu3mPz53KKg/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 20',
                children: [
                  {
                    id: 'video20',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video20_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=20',
                      },
                    ],
                  },
                  {
                    id: 'topics20',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic20_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21',
                      },
                      {
                        id: 'topic20_2',
                        name: '3:22 - Doubts asked',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=202s',
                      },
                      {
                        id: 'topic20_3',
                        name: '5:24 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=324s',
                      },
                      {
                        id: 'topic20_4',
                        name: '8:22 - Question 1',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=502s',
                      },
                      {
                        id: 'topic20_5',
                        name: '19:58 - Question 2',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=1198s',
                      },
                      {
                        id: 'topic20_6',
                        name: '30:13 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=1813s',
                      },
                      {
                        id: 'topic20_7',
                        name: '38:19 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=2299s',
                      },
                      {
                        id: 'topic20_8',
                        name: '43:04 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=2584s',
                      },
                      {
                        id: 'topic20_9',
                        name: '47:57 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=2877s',
                      },
                      {
                        id: 'topic20_10',
                        name: '53:51 - Question 2',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=3231s',
                      },
                      {
                        id: 'topic20_11',
                        name: '1:06:38 - Question 3',
                        url: 'https://www.youtube.com/watch?v=U6rFDWecj_g&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21&t=3998s',
                      }
                    ],
                  },
                  {
                    id: 'summary20',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary20_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/17LuGI3R0Z691RL2Ncpe36Hbl5zyUxZwSjfb9D1yZgVI/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework20',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework20_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1BK6vc-zVfccZOz9TvQeJSZ1oICIDNNyfJPgXD1dF5VE/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 21',
                children: [
                  {
                    id: 'video21',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video21_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=21',
                      },
                    ],
                  },
                  {
                    id: 'topics21',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic21_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22',
                      },
                      {
                        id: 'topic21_2',
                        name: '10:01 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22&t=601s',
                      },
                      {
                        id: 'topic21_3',
                        name: '14:35 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22&t=875s',
                      },
                      {
                        id: 'topic21_4',
                        name: '19:11 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22&t=1151s',
                      },
                      {
                        id: 'topic21_5',
                        name: '22:28 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22&t=1348s',
                      },
                      {
                        id: 'topic21_6',
                        name: '24:21 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22&t=1461s',
                      },
                      {
                        id: 'topic21_7',
                        name: '28:18 - Queston 1',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22&t=1698s',
                      },
                      {
                        id: 'topic21_8',
                        name: '54:31 - Question 2',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22&t=3271s',
                      },
                      {
                        id: 'topic21_9',
                        name: '55:51 - Question 3',
                        url: 'https://www.youtube.com/watch?v=mfHupJVzFng&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22&t=3351s',
                      },
                      {
                        id: 'topic21_10',
                        name: '60:01  - Question 4',
                        url: 'https://youtu.be/mfHupJVzFng?list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&t=3602',
                      },
                    ],
                  },
                  {
                    id: 'summary21',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary21_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1K4WrrzUqT3xItFthSD7VGsRN056tts0PvfHZvpJhg5g/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework21',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework21_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1S1_XO6kChP7_qwVUkOQcFemIXpOiZxwHNoMjWMPDto4/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 22',
                children: [
                  {
                    id: 'video22',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video22_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=SfISoF8TXhw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=22',
                      },
                    ],
                  },
                  {
                    id: 'topics22',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic22_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=SfISoF8TXhw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=23',
                      },
                      {
                        id: 'topic22_2',
                        name: '5:50 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=SfISoF8TXhw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=23&t=350s',
                      },
                      {
                        id: 'topic22_3',
                        name: '12:47 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=SfISoF8TXhw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=23&t=767s',
                      },
                      {
                        id: 'topic22_4',
                        name: '17:44 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=SfISoF8TXhw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=23&t=1064s',
                      },
                      {
                        id: 'topic22_5',
                        name: '25:34 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=SfISoF8TXhw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=23&t=1534s',
                      },
                      {
                        id: 'topic22_6',
                        name: '31:02 - Question 1',
                        url: 'https://www.youtube.com/watch?v=SfISoF8TXhw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=23&t=1862s',
                      },
                      {
                        id: 'topic22_7',
                        name: '38:48 - Queston 2',
                        url: 'https://www.youtube.com/watch?v=SfISoF8TXhw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=23&t=2328s',
                      },
                      {
                        id: 'topic22_8',
                        name: '46:18 - Question 3',
                        url: 'https://www.youtube.com/watch?v=SfISoF8TXhw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=23&t=2778s',
                      }
                    ],
                  },
                  {
                    id: 'summary22',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary22_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1sQEx0gOrXLbwzvIQ0TcdO1-HieuBtpqKr2SQX4k9EqA/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework22',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework22_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/14ykeVPqOt_PlklnaY9Dw_tzQqqMN1Uoi8GZMJ2JF684/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 23',
                children: [
                  {
                    id: 'video23',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video23_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=23',
                      },
                    ],
                  },
                  {
                    id: 'topics23',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic23_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24',
                      },
                      {
                        id: 'topic23_2',
                        name: '4:05 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24&t=245s',
                      },
                      {
                        id: 'topic23_3',
                        name: '6:51 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24&t=411s',
                      },
                      {
                        id: 'topic23_4',
                        name: '9:33 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24&t=573s',
                      },
                      {
                        id: 'topic23_5',
                        name: '11:25 - Question 1',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24&t=685s',
                      },
                      {
                        id: 'topic23_6',
                        name: '23:01 - Question 2',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24&t=1381s',
                      },
                      {
                        id: 'topic23_7',
                        name: '28:01 - Question 3',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24&t=1681s',
                      },
                      {
                        id: 'topic23_8',
                        name: '42:10 - Question 4',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24&t=2530s',
                      },
                      {
                        id: 'topic23_9',
                        name: '55:24 - Question 5',
                        url: 'https://www.youtube.com/watch?v=QhYJdK1utZE&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24&t=3324s',
                      }
                    ],
                  },
                  {
                    id: 'summary23',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary23_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1wGGINqk2yKz69GNZ2KjPArk6DL7XhRE-2gXgXOjlDeE/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework23',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework23_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1uG9xe4OJbeQyHR2p6V3cn5bqi88aWULXh_c3XiYkk8E/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 24',
                children: [
                  {
                    id: 'video24',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video24_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=24',
                      },
                    ],
                  },
                  {
                    id: 'topics24',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic24_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25',
                      },
                      {
                        id: 'topic24_2',
                        name: '4:34 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25&t=274s',
                      },
                      {
                        id: 'topic24_3',
                        name: '10:40 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25&t=640s',
                      },
                      {
                        id: 'topic24_4',
                        name: '13:05 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25&t=785s',
                      },
                      {
                        id: 'topic24_5',
                        name: '15:35 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25&t=935s',
                      },
                      {
                        id: 'topic24_6',
                        name: '33:50 - Question 1',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25&t=2030s',
                      },
                      {
                        id: 'topic24_7',
                        name: '44:30 - Question 2',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25&t=2670s',
                      },
                      {
                        id: 'topic24_8',
                        name: '1:03:09 - Question 3',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25&t=3789s',
                      },
                      {
                        id: 'topic24_9',
                        name: '1:09:11 - Question 4',
                        url: 'https://www.youtube.com/watch?v=GPlWiDvU1GI&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25&t=4151s',
                      }
                    ],
                  },
                  {
                    id: 'summary24',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary24_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1gdXXWIH5cmLnoLb98bmvw64pfvqr8jcqzK9vdX05xYw/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework24',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework24_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1sOvgN2vAPqs-zPS8VAH1Aj8wTbSRhnJzo-Xr4Sre-S4/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 25',
                children: [
                  {
                    id: 'video25',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video25_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=Keua0H6PP3k&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=25',
                      },
                    ],
                  },
                  {
                    id: 'topics25',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic25_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=Keua0H6PP3k&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=26',
                      },
                      {
                        id: 'topic25_2',
                        name: '2:29 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=Keua0H6PP3k&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=26&t=149s',
                      },
                      {
                        id: 'topic25_3',
                        name: '3:51 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=Keua0H6PP3k&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=26&t=231s',
                      },
                      {
                        id: 'topic25_4',
                        name: '10:42 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=Keua0H6PP3k&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=26&t=642s',
                      },
                      {
                        id: 'topic25_5',
                        name: '12:56 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=Keua0H6PP3k&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=26&t=776s',
                      },
                      {
                        id: 'topic25_6',
                        name: '23:06 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=Keua0H6PP3k&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=26&t=1386s',
                      },
                      {
                        id: 'topic25_7',
                        name: '30:31 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=Keua0H6PP3k&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=26&t=1831s',
                      },
                      {
                        id: 'topic25_8',
                        name: '47:52 - Question 1',
                        url: 'https://www.youtube.com/watch?v=Keua0H6PP3k&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=26&t=2872s',
                      }
                    ],
                  },
                  {
                    id: 'summary25',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary25_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1e-aCDXnnWcNbw6n0Lxgli8zHT05aB_UqzzuLwmQKM2w/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework25',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework25_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1_RF1psGNgO-qaPuGvDHA6jGfUqLk7cBubqUfb9LJTJ8/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 26',
                children: [
                  {
                    id: 'video26',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video26_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=OE5o7Ip8Qwg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=26',
                      },
                    ],
                  },
                  {
                    id: 'topics26',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic26_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=OE5o7Ip8Qwg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=27',
                      },
                      {
                        id: 'topic26_2',
                        name: '4:40 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=OE5o7Ip8Qwg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=27&t=280s',
                      },
                      {
                        id: 'topic26_3',
                        name: '11:01 - Question 1',
                        url: 'https://www.youtube.com/watch?v=OE5o7Ip8Qwg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=27&t=661s',
                      },
                      {
                        id: 'topic26_4',
                        name: '27:21 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=OE5o7Ip8Qwg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=27&t=1641s',
                      },
                      {
                        id: 'topic26_5',
                        name: '41:40 - Question 2',
                        url: 'https://www.youtube.com/watch?v=OE5o7Ip8Qwg&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=27&t=2500s',
                      }
                    ],
                  },
                  {
                    id: 'summary26',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary26_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1NAPrI4HZnHRJP7Jzxl6AsKFiLu4yolJfZNRrLU7zo6o/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework26',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework26_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1hPR0ylUJ1xBbdiKE3FXfqBYj7c5uFIxXsb59ZCMD4BA/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 27',
                children: [
                  {
                    id: 'video27',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video27_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=Oj1dYqRL9M0&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=27',
                      },
                    ],
                  },
                  {
                    id: 'topics27',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic27_1',
                        name: '0:00 - Mini BRAHMOS Project Explaintion',
                        url: 'https://www.youtube.com/watch?v=Oj1dYqRL9M0&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=28',
                      }
                    ],
                  },
                  {
                    id: 'summary27',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary27_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1o-wCWPNN8R3grUX2006UStQrf4fbUeI2G6NBUpc8Kvg/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework27',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework27_content',
                        name: 'No Homework was given',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 28',
                children: [
                  {
                    id: 'video28',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video28_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=eEoWuyAVvHQ&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=28',
                      },
                    ],
                  },
                  {
                    id: 'topics28',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic28_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=eEoWuyAVvHQ&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=29',
                      },
                      {
                        id: 'topic28_2',
                        name: '8:57 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=eEoWuyAVvHQ&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=29&t=537s',
                      },
                      {
                        id: 'topic28_3',
                        name: '21:03 - Question 1',
                        url: 'https://www.youtube.com/watch?v=eEoWuyAVvHQ&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=29&t=1263s',
                      },
                      {
                        id: 'topic28_4',
                        name: '48:41 - Question 2',
                        url: 'https://www.youtube.com/watch?v=eEoWuyAVvHQ&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=29&t=2921s',
                      }
                    ],
                  },
                  {
                    id: 'summary28',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary28_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1y8dCJOKTt4rOWvrt4ic6Yw49jkLP5814Sd9grRnPPMU/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework28',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework28_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1tqCMfYTkdszA95HgMMubvT0eLlXnHQVZWMc7UqiPppY/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 29',
                children: [
                  {
                    id: 'video29',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video29_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=Qt9Fginjmyw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=29',
                      },
                    ],
                  },
                  {
                    id: 'topics29',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic29_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=Qt9Fginjmyw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=30',
                      },
                      {
                        id: 'topic29_2',
                        name: '3:21 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=Qt9Fginjmyw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=30&t=201s',
                      },
                      {
                        id: 'topic29_3',
                        name: '16:42 - Question 1',
                        url: 'https://www.youtube.com/watch?v=Qt9Fginjmyw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=30&t=1002s',
                      },
                      {
                        id: 'topic29_4',
                        name: '28:16 - Question 2',
                        url: 'https://www.youtube.com/watch?v=Qt9Fginjmyw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=30&t=1696s',
                      },
                      {
                        id: 'topic29_5',
                        name: '51:58 - Question 3',
                        url: 'https://www.youtube.com/watch?v=Qt9Fginjmyw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=30&t=3118s',
                      },
                      {
                        id: 'topic29_6',
                        name: '1:05:26 - Question 4',
                        url: 'https://www.youtube.com/watch?v=Qt9Fginjmyw&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=30&t=3926s',
                      }
                    ],
                  },
                  {
                    id: 'summary29',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary29_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1zN2f7EmmLE3lfQ_8zch7yr9LZxO8hkO7CDMhIe7vGhE/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework29',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework29_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1iNxGZhhL6uh7Cx2IoCxcNbMvScampjWbjB-jvQa35T8/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 30',
                children: [
                  {
                    id: 'video30',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video30_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=hLOlXHhMBy8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=30',
                      },
                    ],
                  },
                  {
                    id: 'topics30',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic30_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=hLOlXHhMBy8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=31',
                      },
                      {
                        id: 'topic30_2',
                        name: '9:02 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=hLOlXHhMBy8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=31&t=542s',
                      },
                      {
                        id: 'topic30_3',
                        name: '30:26 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=hLOlXHhMBy8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=31&t=1826s',
                      },
                      {
                        id: 'topic30_4',
                        name: '38:20 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=hLOlXHhMBy8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=31&t=2300s',
                      },
                      {
                        id: 'topic30_5',
                        name: '52:52 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=hLOlXHhMBy8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=31&t=3172s',
                      },
                      {
                        id: 'topic30_6',
                        name: '58:16 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=hLOlXHhMBy8&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=31&t=3496s',
                      }
                    ],
                  },
                  {
                    id: 'summary30',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary30_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/11jwR4jTcj-kKZ9PZ8wDfCPpZbu3YbIuBTP7v43kH3Xg/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework30',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework30_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1kOEunhlV3c8SvokmlpYzwzT4tsRmP5p0jIS-5I3FFCM/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 31',
                children: [
                  {
                    id: 'video31',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video31_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=gA8EQ_QFHkU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=31',
                      },
                    ],
                  },
                  {
                    id: 'topics31',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic31_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=gA8EQ_QFHkU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=32',
                      },
                      {
                        id: 'topic31_2',
                        name: '4:33 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=gA8EQ_QFHkU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=32&t=273s',
                      },
                      {
                        id: 'topic31_3',
                        name: '16:28 - Question 1',
                        url: 'https://www.youtube.com/watch?v=gA8EQ_QFHkU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=32&t=988s',
                      },
                      {
                        id: 'topic31_4',
                        name: '34:49 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=gA8EQ_QFHkU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=32&t=2089s',
                      },
                      {
                        id: 'topic31_5',
                        name: '41:21 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=gA8EQ_QFHkU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=32&t=2481s',
                      },
                      {
                        id: 'topic31_6',
                        name: '49:04 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=gA8EQ_QFHkU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=32&t=2944s',
                      },
                      {
                        id: 'topic31_7',
                        name: '53:48 - Question 2',
                        url: 'https://www.youtube.com/watch?v=gA8EQ_QFHkU&list=PL1id2Mcm3074VfaQ4dXLYsi-r5j4q9Xob&index=32&t=3228s',
                      }
                    ],
                  },
                  {
                    id: 'summary31',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary31_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1flGuuqjmhUdOfNf2hsSbLforXnjbXTZsJlDvPqRur4U/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework31',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework31_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1l0ldhbPIcelHG11qfnCYdnqeoCIsOkwplRJdf9wantU/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              }
            ],
          },
          {
            id: 'ratio and proportion',
            name: 'Ratio and Proportion',
            children: [
              {
                id: 'lecture',
                name: 'Lecture 1',
                children: [
                  {
                    id: 'video1',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video1_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=MKXrOOWYBEA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=1',
                      },
                    ],
                  },
                  {
                    id: 'topics1',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic1_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=MKXrOOWYBEA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=2',
                      },
                      {
                        id: 'topic1_2',
                        name: '8:38 - Question 2',
                        url: 'https://www.youtube.com/watch?v=MKXrOOWYBEA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=2&t=518s',
                      },
                      {
                        id: 'topic1_3',
                        name: '16:55 - Question 3',
                        url: 'https://www.youtube.com/watch?v=MKXrOOWYBEA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=2&t=1015s',
                      },
                      {
                        id: 'topic1_4',
                        name: '27:20 - Question 4',
                        url: 'https://www.youtube.com/watch?v=MKXrOOWYBEA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=2&t=1640s',
                      },
                      {
                        id: 'topic1_5',
                        name: '33:33 - Concept',
                        url: 'https://www.youtube.com/watch?v=MKXrOOWYBEA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=2&t=2013s',
                      },
                      {
                        id: 'topic1_6',
                        name: '37:53 - Question 3 Explaination',
                        url: 'https://www.youtube.com/watch?v=MKXrOOWYBEA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=2&t=2273s',
                      },
                      {
                        id: 'topic1_7',
                        name: '39:41 - Question 4 Explaination',
                        url: 'https://youtu.be/MKXrOOWYBEA?list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&t=2381',
                      },
                      {
                        id: 'topic1_8',
                        name: '49:07 - Question 5',
                        url: 'https://www.youtube.com/watch?v=MKXrOOWYBEA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=2&t=2947s',
                      },
                      {
                        id: 'topic1_9',
                        name: '1:01:06 - Question 6',
                        url: 'https://www.youtube.com/watch?v=MKXrOOWYBEA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=2&t=3666s',
                      }
                    ],
                  },
                  {
                    id: 'summary1',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary1_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/19cFxNCkHHnftjcukjOquHLDaCO5cUB7jibbnf9Yhp0k/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework1',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework1_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1K5wdZf-lKDF-7Anz5k2elo2txh46nIxIevClf39XTLQ/edit?tab=t.0#heading=h.yzo54eetb7ff'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 2',
                children: [
                  {
                    id: 'video2',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video2_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=2',
                      },
                    ],
                  },
                  {
                    id: 'topics2',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic2_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3',
                      },
                      {
                        id: 'topic2_2',
                        name: '7:47 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3&t=467s',
                      },
                      {
                        id: 'topic2_3',
                        name: '13:37 - Question 1',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3&t=817s',
                      },
                      {
                        id: 'topic2_4',
                        name: '26:19 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3&t=1579s',
                      },
                      {
                        id: 'topic2_5',
                        name: '31:28 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3&t=1888s',
                      },
                      {
                        id: 'topic2_6',
                        name: '34:26 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3&t=2066s',
                      },
                      {
                        id: 'topic2_7',
                        name: '37:34 - Question 2',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3&t=2254s',
                      },
                      {
                        id: 'topic2_8',
                        name: '59:21 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3&t=3561s',
                      },
                      {
                        id: 'topic2_9',
                        name: '1:04:49 - Question 3',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3&t=3889s',
                      },
                      {
                        id: 'topic2_10',
                        name: '1:12:07 - Question 4',
                        url: 'https://www.youtube.com/watch?v=BThM8CIWSvg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3&t=4327s',
                      }
                    ],
                  },
                  {
                    id: 'summary2',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary2_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/12EumDrTEmMAyPYcwTMqAs5EQgg3T8dV49Z8sDoaQn6Y/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework2',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework2_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1lK35OKEBLhpcetoalNDfJNgm91N2DO2V1Bo6enYvzxc/edit?tab=t.0#heading=h.iyouxg42yadq'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 3',
                children: [
                  {
                    id: 'video3',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video3_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=3',
                      },
                    ],
                  },
                  {
                    id: 'topics3',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic3_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4',
                      },
                      {
                        id: 'topic3_2',
                        name: '6:06 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4&t=366s',
                      },
                      {
                        id: 'topic3_3',
                        name: '10:03 - Concept',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4&t=603s',
                      },
                      {
                        id: 'topic3_4',
                        name: '13:14 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4&t=794s',
                      },
                      {
                        id: 'topic3_5',
                        name: '18:41 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4&t=1121s',
                      },
                      {
                        id: 'topic3_6',
                        name: '27:51 - Question 1',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4&t=1671s',
                      },
                      {
                        id: 'topic3_7',
                        name: '45:57 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4&t=2757s',
                      },
                      {
                        id: 'topic3_8',
                        name: '49:56 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4&t=2996s',
                      },
                      {
                        id: 'topic3_9',
                        name: '56:26 - Question 2',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4&t=3386s',
                      },
                      {
                        id: 'topic3_10',
                        name: '1:05:35 - Question 3',
                        url: 'https://www.youtube.com/watch?v=xF2IzQF3u3g&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4&t=3935s',
                      }
                    ],
                  },
                  {
                    id: 'summary3',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary3_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1rcXWvfv-Lg7T6MaaX1sUA9oOmlDtu2K9-JsrbyBgSPw/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework3',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework3_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1WPMR_DT0ewrzZ0z9n2zHCnUph7trfuAPF-NzLFVOirM/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 4',
                children: [
                  {
                    id: 'video4',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video4_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=cDhrR4idxtc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=4',
                      },
                    ],
                  },
                  {
                    id: 'topics4',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic4_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=cDhrR4idxtc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=5',
                      },
                      {
                        id: 'topic4_2',
                        name: '2:45 - Concept',
                        url: 'https://www.youtube.com/watch?v=cDhrR4idxtc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=5&t=165s',
                      },
                      {
                        id: 'topic4_3',
                        name: '22:01 - Question 1',
                        url: 'https://www.youtube.com/watch?v=cDhrR4idxtc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=5&t=1321s',
                      },
                      {
                        id: 'topic4_4',
                        name: '30:26 - Question 2',
                        url: 'https://www.youtube.com/watch?v=cDhrR4idxtc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=5&t=1826s',
                      },
                      {
                        id: 'topic4_5',
                        name: '42:17 - Question 3',
                        url: 'https://www.youtube.com/watch?v=cDhrR4idxtc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=5&t=2537s',
                      },
                      {
                        id: 'topic4_6',
                        name: '49:24 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=cDhrR4idxtc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=5&t=2964s',
                      },
                      {
                        id: 'topic4_7',
                        name: '55:16 - Question 4',
                        url: 'https://www.youtube.com/watch?v=cDhrR4idxtc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=5&t=3316s',
                      }
                    ],
                  },
                  {
                    id: 'summary4',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary4_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1OL2nytT5xJCv89AaSuptJHBQIBhq9M-vppWNm9TIBtc/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework4',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework4_content',
                        name: 'No Homework was given'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 5',
                children: [
                  {
                    id: 'video5',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video5_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=EKEELY_d_Bc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=5',
                      },
                    ],
                  },
                  {
                    id: 'topics5',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic5_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=EKEELY_d_Bc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=6',
                      },
                      {
                        id: 'topic5_2',
                        name: '16:41 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=EKEELY_d_Bc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=6&t=1001s',
                      },
                      {
                        id: 'topic5_3',
                        name: '37:23 - Question 2',
                        url: 'https://www.youtube.com/watch?v=EKEELY_d_Bc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=6&t=2243s',
                      },
                      {
                        id: 'topic5_4',
                        name: '52:01 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=EKEELY_d_Bc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=6&t=3121s',
                      },
                      {
                        id: 'topic5_5',
                        name: '58:01 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=EKEELY_d_Bc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=6&t=3481s',
                      },
                      {
                        id: 'topic5_6',
                        name: '1:06:12 - Question 3',
                        url: 'https://www.youtube.com/watch?v=EKEELY_d_Bc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=6&t=3972s',
                      }
                    ],
                  },
                  {
                    id: 'summary5',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary5_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1xNc9NUh63l_VG1Gub_t1oScWfBFT0FdIZkHw315FRi0/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework5',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework5_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1KOWSM8u55oTP6Ifk36ykQJ-a0fwnTRzdAa7Imszk10k/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 6',
                children: [
                  {
                    id: 'video6',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video6_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=XXSQzu6cQPc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=6',
                      },
                    ],
                  },
                  {
                    id: 'topics6',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic6_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=XXSQzu6cQPc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=7',
                      },
                      {
                        id: 'topic6_2',
                        name: '6:37 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=XXSQzu6cQPc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=7&t=397s',
                      },
                      {
                        id: 'topic6_3',
                        name: '11:37 - Question 1',
                        url: 'https://www.youtube.com/watch?v=XXSQzu6cQPc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=7&t=697s',
                      },
                      {
                        id: 'topic6_4',
                        name: '26:41 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=XXSQzu6cQPc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=7&t=1601s',
                      },
                      {
                        id: 'topic6_5',
                        name: '31:13 - Question 2',
                        url: 'https://www.youtube.com/watch?v=XXSQzu6cQPc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=7&t=1873s',
                      },
                      {
                        id: 'topic6_6',
                        name: '53:26 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=XXSQzu6cQPc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=7&t=3206s',
                      },
                      {
                        id: 'topic6_7',
                        name: '56:18 - Question 3',
                        url: 'https://www.youtube.com/watch?v=XXSQzu6cQPc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=7&t=3378s',
                      },
                      {
                        id: 'topic6_8',
                        name: '1:12:36 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=XXSQzu6cQPc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=7&t=4356s',
                      }
                    ],
                  },
                  {
                    id: 'summary6',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary6_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1vd2oA47KOlnrUP7-uqgoObngln3MacsMXI4AzTJPcMA/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework6',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework6_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1BZUHRrt5bnx3sP4J5PV05iJ4kt8t9VUjjzNSGNZwEEo/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 7',
                children: [
                  {
                    id: 'video7',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video7_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=7',
                      },
                    ],
                  },
                  {
                    id: 'topics7',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic7_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8',
                      },
                      {
                        id: 'topic7_2',
                        name: '5:11 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8&t=311s',
                      },
                      {
                        id: 'topic7_3',
                        name: '9:21 - Question 1',
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8&t=561s',
                      },
                      {
                        id: 'topic7_4',
                        name: '25:38 - Question 2',
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8&t=1538s',
                      },
                      {
                        id: 'topic7_5',
                        name: '43:47 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8&t=2627s',
                      },
                      {
                        id: 'topic7_6',
                        name: '48:41 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8&t=2921s',
                      },
                      {
                        id: 'topic7_7',
                        name: '51:36 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8&t=3096s',
                      },
                      {
                        id: 'topic7_8',
                        name: '58:19 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8&t=3499s',
                      },
                      {
                        id: 'topic7_9',
                        name: '1:02:25 - Question 3',
                        url: 'https://www.youtube.com/watch?v=KXo-9gDntkU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8&t=3745s',
                      }
                    ],
                  },
                  {
                    id: 'summary7',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary7_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1sFFzwzePjLm3aS3av0di_l2gpk5_bNcAG0xhitHA2Po/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework7',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework7_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/18GRzXPaFa2906L2rKS_uDuilp611dViqSs1x7BOvVCc/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 8',
                children: [
                  {
                    id: 'video8',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video8_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=DSfOAgJKsIA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=8',
                      },
                    ],
                  },
                  {
                    id: 'topics8',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic8_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=DSfOAgJKsIA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=9',
                      },
                      {
                        id: 'topic8_2',
                        name: '3:09 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=DSfOAgJKsIA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=9&t=189s',
                      },
                      {
                        id: 'topic8_3',
                        name: '14:55 - Question 1',
                        url: 'https://www.youtube.com/watch?v=DSfOAgJKsIA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=9&t=895s',
                      },
                      {
                        id: 'topic8_4',
                        name: '50:15 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=DSfOAgJKsIA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=9&t=3015s',
                      },
                      {
                        id: 'topic8_5',
                        name: '56:51 - Question 2',
                        url: 'https://www.youtube.com/watch?v=DSfOAgJKsIA&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=9&t=3411s',
                      }
                    ],
                  },
                  {
                    id: 'summary8',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary8_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1AUNfqJ_Nx3hbKWNDb1ytw5X6ZcZ3RkkXRs3hH4ST8LM/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework8',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework8_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1-8f6Fj6XNNMC-MeU3dOcuT_WJpWR3z8VA3nng5M7dYo/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 9',
                children: [
                  {
                    id: 'video9',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video9_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=y4QWA5sSqiU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=9',
                      },
                    ],
                  },
                  {
                    id: 'topics9',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic9_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=y4QWA5sSqiU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=9',
                      },
                      {
                        id: 'topic9_2',
                        name: '8:16 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=y4QWA5sSqiU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=10&t=496s',
                      },
                      {
                        id: 'topic9_3',
                        name: '11:15 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=y4QWA5sSqiU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=10&t=675s',
                      },
                      {
                        id: 'topic9_4',
                        name: '17:35 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=y4QWA5sSqiU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=10&t=1055s',
                      },
                      {
                        id: 'topic9_5',
                        name: '31:12 - Question 1',
                        url: 'https://www.youtube.com/watch?v=y4QWA5sSqiU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=10&t=1872s',
                      },
                      {
                        id: 'topic9_6',
                        name: '34:16 - Question 2',
                        url: 'https://www.youtube.com/watch?v=y4QWA5sSqiU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=10&t=2056s',
                      },
                      {
                        id: 'topic9_7',
                        name: '1:02:51 - Question 3',
                        url: 'https://www.youtube.com/watch?v=y4QWA5sSqiU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=10&t=3771s',
                      }
                    ],
                  },
                  {
                    id: 'summary9',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary9_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1ngZupg9rE1YNzSbPYUKAfETgvzwVk7WAOY7X0XnJ2EQ/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework9',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework9_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1OD2QerrfgXsz7itsBVTxxrLKDFTVia2NVUZ93c64j4U/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 10',
                children: [
                  {
                    id: 'video10',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video10_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=iQZSw3V8vqs&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=10',
                      },
                    ],
                  },
                  {
                    id: 'topics10',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic10_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=iQZSw3V8vqs&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=11',
                      },
                      {
                        id: 'topic10_2',
                        name: '4:51 - Doubt 1',
                        url: 'http://youtube.com/watch?v=iQZSw3V8vqs&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=11&t=291s',
                      },
                      {
                        id: 'topic10_3',
                        name: '10:23 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=iQZSw3V8vqs&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=11&t=623s',
                      },
                      {
                        id: 'topic10_4',
                        name: '17:37 - Concept',
                        url: 'https://www.youtube.com/watch?v=iQZSw3V8vqs&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=11&t=1057s',
                      },
                      {
                        id: 'topic10_5',
                        name: '23:41 - Question 1',
                        url: 'https://www.youtube.com/watch?v=iQZSw3V8vqs&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=11&t=1421s',
                      }
                    ],
                  },
                  {
                    id: 'summary10',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary10_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1wEaMnf6ch1i4JETKvQu9VPeA3gpzi7cFbyJnCCmwrsE/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework10',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework10_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1tPlrk-GpO7HPecktKyflVFZBmUb5kHE2UuzBY899LgE/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture',
                name: 'Lecture 11',
                children: [
                  {
                    id: 'video11',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video11_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=11',
                      },
                    ],
                  },
                  {
                    id: 'topics11',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic11_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12',
                      },
                      {
                        id: 'topic11_2',
                        name: '7:51 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12&t=471s',
                      },
                      {
                        id: 'topic11_3',
                        name: '14:02 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12&t=842s',
                      },
                      {
                        id: 'topic11_4',
                        name: '19:02 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12&t=1142s',
                      },
                      {
                        id: 'topic11_5',
                        name: '26:18 - New method',
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12&t=1578s',
                      },
                      {
                        id: 'topic11_6',
                        name: '39:51 - Concept',
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12&t=2391s',
                      },
                      {
                        id: 'topic11_7',
                        name: '45:11 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12&t=2711s',
                      },
                      {
                        id: 'topic11_8',
                        name: '49:44 -Doubt 5',
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12&t=2984s',
                      },
                      {
                        id: 'topic11_9',
                        name: '1:00:01 - Question 1',
                        url: 'https://www.youtube.com/watch?v=0V3oJxFwgzw&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12&t=3601s',
                      }
                    ],
                  },
                  {
                    id: 'summary11',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary11_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1RXj85Kv2SMHlfMgKv4573ZQRS9h-JsPrNcjs7kjyr1I/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework11',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework11_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1OD2QerrfgXsz7itsBVTxxrLKDFTVia2NVUZ93c64j4U/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture12',
                name: 'Lecture 12',
                children: [
                  {
                    id: 'video12',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video12_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=mU4divrFwko&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=12',
                      },
                    ],
                  },
                  {
                    id: 'topics12',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic12_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=mU4divrFwko&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=13',
                      },
                      {
                        id: 'topic12_2',
                        name: '13:11 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=mU4divrFwko&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=13&t=791s',
                      },
                      {
                        id: 'topic12_3',
                        name: '20:27 - Question 1',
                        url: 'https://www.youtube.com/watch?v=mU4divrFwko&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=13&t=1227s',
                      },
                      {
                        id: 'topic12_4',
                        name: '54:51 - Question 2',
                        url: 'https://www.youtube.com/watch?v=mU4divrFwko&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=13&t=3291s',
                      },
                      {
                        id: 'topic12_5',
                        name: '1:15:03 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=mU4divrFwko&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=13&t=4503s',
                      }
                    ],
                  },
                  {
                    id: 'summary12',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary12_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1a3njLr6myP6d7supDQuvaRkJVTGe0pRustNTa-G9HoY/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework12',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework12_content',
                        name: 'No Homework was given'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture13',
                name: 'Lecture 13',
                children: [
                  {
                    id: 'video13',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video13_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=3-pKrt64MgU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=13',
                      },
                    ],
                  },
                  {
                    id: 'topics13',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic13_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=3-pKrt64MgU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=14',
                      },
                      {
                        id: 'topic13_2',
                        name: '1:43 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=3-pKrt64MgU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=14&t=103s',
                      },
                      {
                        id: 'topic13_3',
                        name: '12:26 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=3-pKrt64MgU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=14&t=746s',
                      },
                      {
                        id: 'topic13_4',
                        name: '33:36 - Question 1',
                        url: 'https://www.youtube.com/watch?v=3-pKrt64MgU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=14&t=2016s',
                      },
                      {
                        id: 'topic13_5',
                        name: '1:09:19 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=3-pKrt64MgU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=14&t=4159s',
                      },
                      {
                        id: 'topic13_6',
                        name: '1:15:19 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=3-pKrt64MgU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=14&t=4519s',
                      }
                    ],
                  },
                  {
                    id: 'summary13',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary13_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1nY0g5giIZS2eZ7IAXojjUesn1RXpIaxGoPvk1yQSg9Y/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework13',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework13_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1WzO_XmJLKR1erh7EgvzSwCb8wtiPNBWLZxY15R11bAE/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture14',
                name: 'Lecture 14',
                children: [
                  {
                    id: 'video14',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video14_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=2GUayIAjPZM&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=14',
                      },
                    ],
                  },
                  {
                    id: 'topics14',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic14_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=2GUayIAjPZM&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=15',
                      },
                      {
                        id: 'topic14_2',
                        name: '6:31 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=2GUayIAjPZM&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=15&t=391s',
                      },
                      {
                        id: 'topic14_3',
                        name: '13:37 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=2GUayIAjPZM&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=15&t=817s',
                      },
                      {
                        id: 'topic14_4',
                        name: '28:35 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=2GUayIAjPZM&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=15&t=1715s',
                      },
                      {
                        id: 'topic14_5',
                        name: '43:38 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=2GUayIAjPZM&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=15&t=2618s',
                      },
                      {
                        id: 'topic14_6',
                        name: '48:02 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=2GUayIAjPZM&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=15&t=2882s',
                      },
                      {
                        id: 'topic14_7',
                        name: '55:06 - Question 1',
                        url: 'https://www.youtube.com/watch?v=2GUayIAjPZM&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=15&t=3306s',
                      }
                    ],
                  },
                  {
                    id: 'summary14',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary14_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1N754mzweENMXIpejogV968fnhHVIfJSeihBiHcDxTZ4/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework14',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework14_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1S4YQ45YZOPfCMpG0ffFC5z9bKiNG3jpNPl-hlWAjcGE/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture15',
                name: 'Lecture 15',
                children: [
                  {
                    id: 'video15',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video15_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=uEQxCvcQf_A&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=15',
                      },
                    ],
                  },
                  {
                    id: 'topics15',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic15_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=uEQxCvcQf_A&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=16',
                      },
                      {
                        id: 'topic15_2',
                        name: '9:01 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=uEQxCvcQf_A&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=16&t=541s',
                      },
                      {
                        id: 'topic15_3',
                        name: '45:35 - Question 1',
                        url: 'https://www.youtube.com/watch?v=uEQxCvcQf_A&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=16&t=2735s',
                      }
                    ],
                  },
                  {
                    id: 'summary15',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary15_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/11dZNF3BLodoprT8_ZsWDpYXssU8KCXm6FIDA44WiF7M/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework15',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework15_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture16',
                name: 'Lecture 16',
                children: [
                  {
                    id: 'video16',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video16_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=RM7sX4FzbyU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=16',
                      },
                    ],
                  },
                  {
                    id: 'topics16',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic16_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=RM7sX4FzbyU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=17',
                      },
                      {
                        id: 'topic16_2',
                        name: '2:16 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=RM7sX4FzbyU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=17&t=136s',
                      },
                      {
                        id: 'topic16_3',
                        name: '6:15 - Question 1',
                        url: 'https://www.youtube.com/watch?v=RM7sX4FzbyU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=17&t=375s',
                      },
                      {
                        id: 'topic16_4',
                        name: '48:46 - Question 2',
                        url: 'https://www.youtube.com/watch?v=RM7sX4FzbyU&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=17&t=2926s',
                      }
                    ],
                  },
                  {
                    id: 'summary16',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary16_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1wDacjMwRtSmEWAeDw-3Xac9qoOVW9CTwDkMfrLwsoNw/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework16',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework16_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1hL1qBhMVE5zhvGr6igZVHjYHRZTSnT3ybVA8pT7G7FQ/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture17',
                name: 'Lecture 17',
                children: [
                  {
                    id: 'video17',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video17_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=-bA1E6-uE_s&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=17',
                      },
                    ],
                  },
                  {
                    id: 'topics17',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic17_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=-bA1E6-uE_s&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=18',
                      },
                      {
                        id: 'topic17_2',
                        name: '4:42 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=-bA1E6-uE_s&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=18&t=282s',
                      },
                      {
                        id: 'topic17_3',
                        name: '12:42 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=-bA1E6-uE_s&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=18&t=762s',
                      },
                      {
                        id: 'topic17_4',
                        name: '26:22 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=-bA1E6-uE_s&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=18&t=1582s',
                      },
                      {
                        id: 'topic17_5',
                        name: '37:52 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=-bA1E6-uE_s&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=18&t=2272s',
                      },
                      {
                        id: 'topic17_6',
                        name: '44:22 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=-bA1E6-uE_s&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=18&t=2662s',
                      },
                      {
                        id: 'topic17_7',
                        name: '48:22 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=-bA1E6-uE_s&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=18&t=2902s',
                      },
                      {
                        id: 'topic17_8',
                        name: '54:10 - Doubt 7',
                        url: 'https://www.youtube.com/watch?v=-bA1E6-uE_s&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=18&t=3250s',
                      },
                      {
                        id: 'topic17_9',
                        name: '1:02:09 - Doubt 8',
                        url: 'https://www.youtube.com/watch?v=-bA1E6-uE_s&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=18&t=3729s',
                      }
                    ],
                  },
                  {
                    id: 'summary17',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary17_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1jSZaNq2QivQUuYtzZxCUWs7bc1-ehzxznTyV-II4FbE/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework17',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework17_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1yR5XoYDNcn4owTAC80myRA7CRaVmmSsS1iPy5Y98_js/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture18',
                name: 'Lecture 18',
                children: [
                  {
                    id: 'video18',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video18_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=2XtEIaRl2zc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=18',
                      },
                    ],
                  },
                  {
                    id: 'topics18',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic18_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=2XtEIaRl2zc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=19',
                      },
                      {
                        id: 'topic18_2',
                        name: '7:14 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=2XtEIaRl2zc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=19&t=434s',
                      },
                      {
                        id: 'topic18_3',
                        name: '14:18 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=2XtEIaRl2zc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=19&t=858s',
                      },
                      {
                        id: 'topic18_4',
                        name: '24:11 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=2XtEIaRl2zc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=19&t=1451s',
                      },
                      {
                        id: 'topic18_5',
                        name: '37:03 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=2XtEIaRl2zc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=19&t=2223s',
                      },
                      {
                        id: 'topic18_6',
                        name: '48:02 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=2XtEIaRl2zc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=19&t=2882s',
                      },
                      {
                        id: 'topic18_7',
                        name: '1:10:15 - Question 1',
                        url: 'https://www.youtube.com/watch?v=2XtEIaRl2zc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=19&t=4215s',
                      }
                    ],
                  },
                  {
                    id: 'summary18',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary18_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/18nGvzyLWTxqlY70g0UxVQIFu4nudTTIWIWWIdqczBDs/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework18',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework18_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1fWpd2k8LErtJR12itCx1Ji35tyky3DqHMew3Zz_OnJE/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture19',
                name: 'Lecture 19',
                children: [
                  {
                    id: 'video19',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video19_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=BxtpbpWSncg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=19',
                      },
                    ],
                  },
                  {
                    id: 'topics19',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic19_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=BxtpbpWSncg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=20',
                      },
                      {
                        id: 'topic19_2',
                        name: '5:03 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=BxtpbpWSncg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=20&t=303s',
                      },
                      {
                        id: 'topic19_3',
                        name: '17:30 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=BxtpbpWSncg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=20&t=1050s',
                      },
                      {
                        id: 'topic19_4',
                        name: '22:34 - Question 1',
                        url: 'https://www.youtube.com/watch?v=BxtpbpWSncg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=20&t=1354s',
                      },
                      {
                        id: 'topic19_5',
                        name: '34:20 - Question 2',
                        url: 'https://www.youtube.com/watch?v=BxtpbpWSncg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=20&t=2060s',
                      },
                      {
                        id: 'topic19_6',
                        name: '52:15 - Concept',
                        url: 'https://www.youtube.com/watch?v=BxtpbpWSncg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=20&t=3135s',
                      },
                      {
                        id: 'topic19_7',
                        name: '53:21 - Question 3',
                        url: 'https://www.youtube.com/watch?v=BxtpbpWSncg&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=20&t=3201s',
                      }
                    ],
                  },
                  {
                    id: 'summary19',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary19_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1PEkdeGyoT38bjKCnkv1-piMQC5rSAzsCaudBOB3Ogio/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework19',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework19_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1uvwU8bdTwQ-TZbUPULmeS6Czv3dYWZXU0djioUADcBU/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture20',
                name: 'Lecture 20',
                children: [
                  {
                    id: 'video20',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video20_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=KAXTG8A35pc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=20',
                      },
                    ],
                  },
                  {
                    id: 'topics20',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic20_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=KAXTG8A35pc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=21',
                      },
                      {
                        id: 'topic20_2',
                        name: '5:41 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=KAXTG8A35pc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=21&t=341s',
                      },
                      {
                        id: 'topic20_3',
                        name: '9:03 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=KAXTG8A35pc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=21&t=543s',
                      },
                      {
                        id: 'topic20_4',
                        name: '14:19 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=KAXTG8A35pc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=21&t=859s',
                      },
                      {
                        id: 'topic20_5',
                        name: '19:21 - Question 1',
                        url: 'https://www.youtube.com/watch?v=KAXTG8A35pc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=21&t=1161s',
                      },
                      {
                        id: 'topic20_6',
                        name: '30:29 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=KAXTG8A35pc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=21&t=1829s',
                      },
                      {
                        id: 'topic20_7',
                        name: '34:18 - Question 2',
                        url: 'https://www.youtube.com/watch?v=KAXTG8A35pc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=21&t=2058s',
                      },
                      {
                        id: 'topic20_8',
                        name: '41:47 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=KAXTG8A35pc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=21&t=2507s',
                      },
                      {
                        id: 'topic20_9',
                        name: '46:45 - Question 3',
                        url: 'https://www.youtube.com/watch?v=KAXTG8A35pc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=21&t=2805s',
                      },
                      {
                        id: 'topic20_10',
                        name: '52:05 - Concept',
                        url: 'https://www.youtube.com/watch?v=KAXTG8A35pc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=21&t=3125s',
                      },
                      {
                        id: 'topic20_11',
                        name: '54:01 - Question 4',
                        url: 'https://www.youtube.com/watch?v=KAXTG8A35pc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=21&t=3241s',
                      },
                      {
                        id: 'topic20_12',
                        name: '58:13 - Question 5',
                        url: 'https://www.youtube.com/watch?v=KAXTG8A35pc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=21&t=3493s',
                      },
                      {
                        id: 'topic20_13',
                        name: '1:05:11 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=KAXTG8A35pc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=21&t=3911s',
                      },
                      {
                        id: 'topic20_14',
                        name: '1:12:16 - Doubt 7',
                        url: 'https://www.youtube.com/watch?v=KAXTG8A35pc&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=21&t=4336s',
                      }
                    ],
                  },
                  {
                    id: 'summary20',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary20_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1-XZ5zRxjwgt9ctO-JrZKEBFIrp4Lz3qu2X_Yyvu0G98/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework20',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework20_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture21',
                name: 'Lecture 21',
                children: [
                  {
                    id: 'video21',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video21_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=Pg8f-tFASnQ&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=21',
                      },
                    ],
                  },
                  {
                    id: 'topics21',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic21_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=Pg8f-tFASnQ&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=22',
                      },
                      {
                        id: 'topic21_2',
                        name: '2:11 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=Pg8f-tFASnQ&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=22&t=131s',
                      },
                      {
                        id: 'topic21_3',
                        name: '8:10 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=Pg8f-tFASnQ&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=22&t=490s',
                      },
                      {
                        id: 'topic21_4',
                        name: '11:12 - Question 1',
                        url: 'https://www.youtube.com/watch?v=Pg8f-tFASnQ&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=22&t=672s',
                      },
                      {
                        id: 'topic21_5',
                        name: '27:29 - Question 2',
                        url: 'https://www.youtube.com/watch?v=Pg8f-tFASnQ&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=22&t=1649s',
                      },
                      {
                        id: 'topic21_6',
                        name: '39:55 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=Pg8f-tFASnQ&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=22&t=2395s',
                      },
                      {
                        id: 'topic21_7',
                        name: '42:57 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=Pg8f-tFASnQ&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=22&t=2577s',
                      },
                      {
                        id: 'topic21_8',
                        name: '53:27 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=Pg8f-tFASnQ&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=22&t=3207s',
                      },
                      {
                        id: 'topic21_9',
                        name: '55:26 - Question 3',
                        url: 'https://www.youtube.com/watch?v=Pg8f-tFASnQ&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=22&t=3326s',
                      },
                      {
                        id: 'topic21_10',
                        name: '1:07:41 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=Pg8f-tFASnQ&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=22&t=4061s',
                      },
                      {
                        id: 'topic21_11',
                        name: '1:18:19 - Magic Trick',
                        url: 'https://www.youtube.com/watch?v=Pg8f-tFASnQ&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=22&t=4699s',
                      }
                    ],
                  },
                  {
                    id: 'summary21',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary21_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1l91jHoHb9hTOWSRwyEQX0ybPhxvKt6NQ4nbzIXC295g/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework21',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework21_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1RMEFTOm4AuRmowZSeJiKPKiGAr1fiEkVEsvXcyYxHd8/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture22',
                name: 'Lecture 22',
                children: [
                  {
                    id: 'video22',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video22_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=Sgr3nvzl3Sk&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=22',
                      },
                    ],
                  },
                  {
                    id: 'topics22',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic22_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=Sgr3nvzl3Sk&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=23',
                      },
                      {
                        id: 'topic22_2',
                        name: '16:43 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=Sgr3nvzl3Sk&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=23&t=1003s',
                      },
                      {
                        id: 'topic22_3',
                        name: '19:02 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=Sgr3nvzl3Sk&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=23&t=1142s',
                      },
                      {
                        id: 'topic22_4',
                        name: '23:27 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=Sgr3nvzl3Sk&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=23&t=1407s',
                      },
                      {
                        id: 'topic22_5',
                        name: '27:34 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=Sgr3nvzl3Sk&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=23&t=1654s',
                      },
                      {
                        id: 'topic22_6',
                        name: '30:57 - Question 1',
                        url: 'https://www.youtube.com/watch?v=Sgr3nvzl3Sk&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=23&t=1857s',
                      },
                      {
                        id: 'topic22_7',
                        name: '34:13 - Question 2',
                        url: 'https://www.youtube.com/watch?v=Sgr3nvzl3Sk&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=23&t=2053s',
                      },
                      {
                        id: 'topic22_8',
                        name: '46:12 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=Sgr3nvzl3Sk&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=23&t=2772s',
                      },
                      {
                        id: 'topic22_9',
                        name: '50:45 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=Sgr3nvzl3Sk&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=23&t=3045s',
                      },
                      {
                        id: 'topic22_10',
                        name: '57:28 - Doubt 7',
                        url: 'https://www.youtube.com/watch?v=Sgr3nvzl3Sk&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=23&t=3448s',
                      },
                      {
                        id: 'topic22_11',
                        name: '1:00:31 - Doubt 8',
                        url: 'https://www.youtube.com/watch?v=Sgr3nvzl3Sk&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=23&t=3631s',
                      },
                      {
                        id: 'topic22_12',
                        name: '1:10:24 - Doubt 9',
                        url: 'https://www.youtube.com/watch?v=Sgr3nvzl3Sk&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=23&t=4224s',
                      }
                    ],
                  },
                  {
                    id: 'summary22',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary22_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1rPTMPqkO2ma46dvLoaa6KA6PKulu0Pu9bZQoDFOdKGA/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework22',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework22_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1LdMX6EsNAFEe1NTB-RN1a-Z1B1Hth5Vr-fg_tgx3WSI/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture23',
                name: 'Lecture 23',
                children: [
                  {
                    id: 'video23',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video23_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=IlUlyQE_-A8&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=23',
                      },
                    ],
                  },
                  {
                    id: 'topics23',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic23_1',
                        name: '0:00 - Homework checking',
                        url: 'https://www.youtube.com/watch?v=IlUlyQE_-A8&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=24',
                      },
                      {
                        id: 'topic23_2',
                        name: '13:55 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=IlUlyQE_-A8&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=24&t=835s',
                      },
                      {
                        id: 'topic23_3',
                        name: '21:28 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=IlUlyQE_-A8&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=24&t=1288s',
                      },
                      {
                        id: 'topic23_4',
                        name: '27:02 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=IlUlyQE_-A8&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=24&t=1622s',
                      },
                      {
                        id: 'topic23_5',
                        name: '32:17 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=IlUlyQE_-A8&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=24&t=1937s',
                      },
                      {
                        id: 'topic23_6',
                        name: '45:44 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=IlUlyQE_-A8&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=24&t=2744s',
                      },
                      {
                        id: 'topic23_7',
                        name: '48:18 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=IlUlyQE_-A8&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=24&t=2898s',
                      },
                      {
                        id: 'topic23_8',
                        name: '1:02:24 - Doubt 7',
                        url: 'https://www.youtube.com/watch?v=IlUlyQE_-A8&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=24&t=3744s',
                      },
                      {
                        id: 'topic23_9',
                        name: '1:12:27 - Doubt 8',
                        url: 'https://www.youtube.com/watch?v=IlUlyQE_-A8&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=24&t=4347s',
                      },
                      {
                        id: 'topic23_10',
                        name: '1:16:29 - Doubt 9',
                        url: 'https://www.youtube.com/watch?v=IlUlyQE_-A8&list=PL1id2Mcm3075Asb8vv0sOFwRCMx7cyu6e&index=24&t=4589s',
                      }
                    ],
                  },
                  {
                    id: 'summary23',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary23_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1cFLzkf9oWy8kmaMbKa8DrA893HrQ6OIDyEWVTyQib1w/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework23',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework23_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture24',
                name: 'Lecture 24',
                children: [
                  {
                    id: 'video24',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video24_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=iVTFhlPOMjA',
                      },
                    ],
                  },
                  {
                    id: 'topics24',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic24_1',
                        name: '0:00 - 3-equation 3-unknown system of equations solving',
                        url: 'https://www.youtube.com/watch?v=iVTFhlPOMjA',
                      },
                      {
                        id: 'topic24_2',
                        name: '21:23 - Question 1',
                        url: 'https://www.youtube.com/watch?v=iVTFhlPOMjA&t=1283s',
                      }
                    ],
                  },
                  {
                    id: 'summary24',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary24_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/16jrJxcouZYeyOw6Sw8uV-e4eg8wyfAX30-xYQGacQPQ/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework24',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework24_content',
                        name: 'https://docs.google.com/document/d/1xO09nH6XR6_NYzLa5obnUlWyp899q_TA-kicWluvoDg/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              }
            ]
          },
        ],
      },
      {
        id: 'physics',
        name: 'Physics',
        children: [
          {
            id: 'unit convertions',
            name: 'Unit Convertions',
            children: [
              {
                id: 'lecture1',
                name: 'Lecture 1',
                children: [
                  {
                    id: 'video1',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video1_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=Pa85yfHGqbE&list=PL1id2Mcm3077tRmAqhG6F4C1EGKGK4LK7',
                      },
                    ],
                  },
                  {
                    id: 'topics1',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic1_1',
                        name: '0:00 - concept of conversion of units',
                        url: 'https://www.youtube.com/watch?v=Pa85yfHGqbE&list=PL1id2Mcm3077tRmAqhG6F4C1EGKGK4LK7&index=2',
                      },
                      {
                        id: 'topic1_2',
                        name: '1:27 - Question 1',
                        url: 'https://www.youtube.com/watch?v=Pa85yfHGqbE&list=PL1id2Mcm3077tRmAqhG6F4C1EGKGK4LK7&index=2&t=87s',
                      },
                      {
                        id: 'topic1_3',
                        name: '10:51 - Concept',
                        url: 'https://www.youtube.com/watch?v=Pa85yfHGqbE&list=PL1id2Mcm3077tRmAqhG6F4C1EGKGK4LK7&index=2&t=651s',
                      },
                      {
                        id: 'topic1_4',
                        name: '12:07 - Question 2',
                        url: 'https://www.youtube.com/watch?v=Pa85yfHGqbE&list=PL1id2Mcm3077tRmAqhG6F4C1EGKGK4LK7&index=2&t=727s',
                      },
                      {
                        id: 'topic1_5',
                        name: '25:47 - Mass based conversion',
                        url: 'https://www.youtube.com/watch?v=Pa85yfHGqbE&list=PL1id2Mcm3077tRmAqhG6F4C1EGKGK4LK7&index=2&t=1547s',
                      },
                      {
                        id: 'topic1_6',
                        name: '26:20 - Question 3',
                        url: 'https://www.youtube.com/watch?v=Pa85yfHGqbE&list=PL1id2Mcm3077tRmAqhG6F4C1EGKGK4LK7&index=2&t=1580s',
                      },
                      {
                        id: 'topic1_7',
                        name: '38:54 - Time based conversion',
                        url: 'https://www.youtube.com/watch?v=Pa85yfHGqbE&list=PL1id2Mcm3077tRmAqhG6F4C1EGKGK4LK7&index=2&t=2334s',
                      },
                      {
                        id: 'topic1_8',
                        name: '39:27 - Question 4',
                        url: 'https://www.youtube.com/watch?v=Pa85yfHGqbE&list=PL1id2Mcm3077tRmAqhG6F4C1EGKGK4LK7&index=2&t=2367s',
                      },
                      {
                        id: 'topic1_9',
                        name: '52:05 - Question 5',
                        url: 'https://www.youtube.com/watch?v=Pa85yfHGqbE&list=PL1id2Mcm3077tRmAqhG6F4C1EGKGK4LK7&index=2&t=3125s',
                      }
                    ],
                  },
                  {
                    id: 'summary1',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary1_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1IeGdp_NjYzrm8xW5JgDb6t6PmzwON8Pzwshv3KvEZ14/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework1',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework1_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1Tzv2028XlMcRI_PpTW5wGTY6wvbsSyOq8-kwiZZ_Khg/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              }
            ]
          },
          {
            id: 'speed, time and distance',
            name: 'Speed, Time and Distance',
            children: [
             {
                id: 'lecture1',
                name: 'Lecture 1',
                children: [
                  {
                    id: 'video1',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video1_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=1V96WQu7Uag&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=10',
                      },
                    ],
                  },
                  {
                    id: 'topics1',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic1_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=1V96WQu7Uag&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=11',
                      },
                      {
                        id: 'topic1_2',
                        name: '1:24 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=1V96WQu7Uag&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=11&t=84s',
                      },
                      {
                        id: 'topic1_3',
                        name: '6:09 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=1V96WQu7Uag&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=11&t=369s',
                      },
                      {
                        id: 'topic1_4',
                        name: '9:51 - Question 1',
                        url: 'https://www.youtube.com/watch?v=1V96WQu7Uag&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=11&t=591s',
                      },
                      {
                        id: 'topic1_5',
                        name: '40:05 - Question 2',
                        url: 'https://www.youtube.com/watch?v=1V96WQu7Uag&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=11&t=2405s',
                      },
                      {
                        id: 'topic1_6',
                        name: '1:02:04 - Question 3',
                        url: 'https://www.youtube.com/watch?v=1V96WQu7Uag&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=11&t=3724s',
                      },
                      {
                        id: 'topic1_7',
                        name: '1:12:51 - Question 4',
                        url: 'https://www.youtube.com/watch?v=1V96WQu7Uag&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=11&t=4371s',
                      }
                    ],
                  },
                  {
                    id: 'summary1',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary1_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1GEDTJHFQ-W9AQAtCxJYFsNX8oHw1STX1LtP9CP1w4pw/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework1',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework1_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1l6Q2rZ7I3gUFnzBJt-tLYyg-ktnX3VJgeeleV15QkO8/edit?tab=t.0'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture2',
                name: 'Lecture 2',
                children: [
                  {
                    id: 'video2',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video2_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=ONdVnPNx2Ks&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=9',
                      },
                    ],
                  },
                  {
                    id: 'topics2',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic2_1',
                        name: '0:00 - Concept',
                        url: 'https://www.youtube.com/watch?v=ONdVnPNx2Ks&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=10',
                      },
                      {
                        id: 'topic2_2',
                        name: '30:38 - Question 1',
                        url: 'https://www.youtube.com/watch?v=ONdVnPNx2Ks&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=10&t=1838s',
                      },
                      {
                        id: 'topic2_3',
                        name: '55:16 - Question 2',
                        url: 'https://www.youtube.com/watch?v=ONdVnPNx2Ks&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=10&t=3316s',
                      },
                      {
                        id: 'topic2_4',
                        name: '1:05:39 - Question 3',
                        url: 'https://www.youtube.com/watch?v=ONdVnPNx2Ks&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=10&t=3939s',
                      }
                    ],
                  },
                  {
                    id: 'summary2',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary2_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1sF1SG2pWIGY2T5W24R8-gX5fUdxntquFTnAWkfGeGBY/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework2',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework2_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture3',
                name: 'Lecture 3',
                children: [
                  {
                    id: 'video3',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video3_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=WtvhXgmUs0M&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=8',
                      },
                    ],
                  },
                  {
                    id: 'topics3',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic3_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=WtvhXgmUs0M&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=9',
                      },
                      {
                        id: 'topic3_2',
                        name: '20:11 - Question 2',
                        url: 'https://www.youtube.com/watch?v=WtvhXgmUs0M&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=9&t=1211s',
                      },
                      {
                        id: 'topic3_3',
                        name: '34:08 - Question 3',
                        url: 'https://www.youtube.com/watch?v=WtvhXgmUs0M&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=9&t=2048s',
                      }
                    ],
                  },
                  {
                    id: 'summary3',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary3_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1r9V0SHp0KC3dH5kcx6ilZpcggRLI6TWGurby8TzdBbg/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework3',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework3_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1gSejfOErZbEvXC81EUcbVV0rMG4Q6DIE-b3HsKVcQq4/edit?tab=t.0'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture4',
                name: 'Lecture 4',
                children: [
                  {
                    id: 'video4',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video4_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=wSDpggAtLrY&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=6',
                      },
                    ],
                  },
                  {
                    id: 'topics4',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic4_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=wSDpggAtLrY&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=7',
                      },
                      {
                        id: 'topic4_2',
                        name: '36:48 - Question 2',
                        url: 'https://www.youtube.com/watch?v=wSDpggAtLrY&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=7&t=2208s',
                      },
                      {
                        id: 'topic4_3',
                        name: '48:26 - Question 3',
                        url: 'https://www.youtube.com/watch?v=wSDpggAtLrY&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=7&t=2906s',
                      }
                    ],
                  },
                  {
                    id: 'summary4',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary4_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1OQfDGz4neP2Vbi5GPbH-xx-SRk8B0CwgwYn-2aAqJ_M/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework4',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework4_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture5',
                name: 'Lecture 5',
                children: [
                  {
                    id: 'video5',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video5_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=c3jg8JcfAhw&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=7',
                      },
                    ],
                  },
                  {
                    id: 'topics5',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic5_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=c3jg8JcfAhw&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=8',
                      },
                      {
                        id: 'topic5_2',
                        name: '9:18 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=c3jg8JcfAhw&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=8&t=558s',
                      },
                      {
                        id: 'topic5_3',
                        name: '20:31 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=c3jg8JcfAhw&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=8&t=1231s',
                      },
                      {
                        id: 'topic5_4',
                        name: '24:44 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=c3jg8JcfAhw&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=8&t=1484s',
                      },
                      {
                        id: 'topic5_5',
                        name: '30:01 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=c3jg8JcfAhw&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=8&t=1801s',
                      },
                      {
                        id: 'topic5_6',
                        name: '59:21 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=c3jg8JcfAhw&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=8&t=3561s',
                      },
                      {
                        id: 'topic5_7',
                        name: '1:11:28 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=c3jg8JcfAhw&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=8&t=4288s',
                      }
                    ],
                  },
                  {
                    id: 'summary5',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary5_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1cSZXaP46D-Ii3c8d89zKrQtXA2ejJFFNB4XMSD_2QJ8/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework5',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework5_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/10CjJDiiFlFEwKPsDPMP0laEKZ6_3xYC4x774OVBwBgA/edit?tab=t.0'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture6',
                name: 'Lecture 6',
                children: [
                  {
                    id: 'video6',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video6_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=kEnUq5-ikuM&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5',
                      },
                    ],
                  },
                  {
                    id: 'topics6',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic6_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=kEnUq5-ikuM&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=6',
                      },
                      {
                        id: 'topic6_2',
                        name: '12:54 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=kEnUq5-ikuM&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=6&t=774s',
                      },
                      {
                        id: 'topic6_3',
                        name: '16:40 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=kEnUq5-ikuM&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=6&t=1000s',
                      },
                      {
                        id: 'topic6_4',
                        name: '21:55 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=kEnUq5-ikuM&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=6&t=1315s',
                      },
                      {
                        id: 'topic6_5',
                        name: '41:04 - Question 1',
                        url: 'https://www.youtube.com/watch?v=kEnUq5-ikuM&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=6&t=2464s',
                      },
                      {
                        id: 'topic6_6',
                        name: '1:07:06 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=kEnUq5-ikuM&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=6&t=4026s',
                      },
                      {
                        id: 'topic6_7',
                        name: '1:11:41 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=kEnUq5-ikuM&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=6&t=4301s',
                      }
                    ],
                  },
                  {
                    id: 'summary6',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary6_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1E6GivRYEEb5PpcqAlY_0LGcdP7UZoDycDGLIZbUmV8Y/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework6',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework6_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture7',
                name: 'Lecture 7',
                children: [
                  {
                    id: 'video',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video7_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=yYp6Ip5vmXM&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=4',
                      },
                    ],
                  },
                  {
                    id: 'topics7',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic7_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=yYp6Ip5vmXM&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5',
                      },
                      {
                        id: 'topic7_2',
                        name: '6:49 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=yYp6Ip5vmXM&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5&t=409s',
                      },
                      {
                        id: 'topic7_3',
                        name: '9:59 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=yYp6Ip5vmXM&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5&t=599s',
                      },
                      {
                        id: 'topic7_4',
                        name: '14:49 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=yYp6Ip5vmXM&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5&t=889s',
                      },
                      {
                        id: 'topic7_5',
                        name: '22:29 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=yYp6Ip5vmXM&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5&t=1349s',
                      },
                      {
                        id: 'topic7_6',
                        name: '25:59 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=yYp6Ip5vmXM&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5&t=1559s',
                      },
                      {
                        id: 'topic7_7',
                        name: '39:02 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=yYp6Ip5vmXM&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5&t=2342s',
                      },
                      {
                        id: 'topic7_8',
                        name: '45:22 - Doubt 7',
                        url: 'https://www.youtube.com/watch?v=yYp6Ip5vmXM&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5&t=2722s',
                      },
                      {
                        id: 'topic7_9',
                        name: '55:59 - Doubt 8',
                        url: 'https://www.youtube.com/watch?v=yYp6Ip5vmXM&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5&t=3359s',
                      },
                      {
                        id: 'topic7_10',
                        name: '1:08:28 - Doubt 9',
                        url: 'https://www.youtube.com/watch?v=yYp6Ip5vmXM&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5&t=4108s',
                      }
                    ],
                  },
                  {
                    id: 'summary7',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary7_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1qDHxwyNNEfLiO0qhaPkYkftNI_urxbibhwaeIBBKfHA/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework7',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework7_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture8',
                name: 'Lecture 8',
                children: [
                  {
                    id: 'video8',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video8_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=H_J-UMBwI64&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=3',
                      },
                    ],
                  },
                  {
                    id: 'topics8',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic8_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=H_J-UMBwI64&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=4',
                      },
                      {
                        id: 'topic8_2',
                        name: '18:41 - Question 2',
                        url: 'https://www.youtube.com/watch?v=H_J-UMBwI64&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=4&t=1121s',
                      },
                      {
                        id: 'topic8_3',
                        name: '30:16 - Question 3',
                        url: 'https://www.youtube.com/watch?v=H_J-UMBwI64&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=4&t=1816s',
                      },
                      {
                        id: 'topic8_4',
                        name: '42:15 - Question 4',
                        url: 'https://www.youtube.com/watch?v=H_J-UMBwI64&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=4&t=2535s',
                      }
                    ],
                  },
                  {
                    id: 'summary8',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary8_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1OOavLHZ6SgvzmB2yA9SgfkRNpyBUa0j18zK8b2zspkI/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework8',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework8_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1w78ZFluRdmRTi4C79TjWNh8OEgbC1iAcnnf_l1_UpFc/edit?tab=t.0'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture9',
                name: 'Lecture 9',
                children: [
                  {
                    id: 'video9',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video9_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=zfgQBgZy0h4&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2',
                      },
                    ],
                  },
                  {
                    id: 'topics9',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic9_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=zfgQBgZy0h4&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=3',
                      },
                      {
                        id: 'topic9_2',
                        name: '2:01 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=zfgQBgZy0h4&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=3&t=121s',
                      },
                      {
                        id: 'topic9_3',
                        name: '8:11 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=zfgQBgZy0h4&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=3&t=491s',
                      },
                      {
                        id: 'topic9_4',
                        name: '14:15 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=zfgQBgZy0h4&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=3&t=855s',
                      },
                      {
                        id: 'topic9_5',
                        name: '19:34 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=zfgQBgZy0h4&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=3&t=1174s',
                      },
                      {
                        id: 'topic9_6',
                        name: '26:04 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=zfgQBgZy0h4&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=3&t=1564s',
                      },
                      {
                        id: 'topic9_7',
                        name: '32:42 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=zfgQBgZy0h4&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=3&t=1962s',
                      },
                      {
                        id: 'topic9_8',
                        name: '36:43 - Doubt 7',
                        url: 'https://www.youtube.com/watch?v=zfgQBgZy0h4&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=3&t=2203s',
                      },
                      {
                        id: 'topic9_9',
                        name: '50:13 - Doubt 8',
                        url: 'https://www.youtube.com/watch?v=zfgQBgZy0h4&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=3&t=3013s',
                      }
                    ],
                  },
                  {
                    id: 'summary9',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1GEynNSCoK6HVQp1QgF7APbVsFInED4nc7rnphBnhumY/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework9',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework9_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture10',
                name: 'Lecture 10',
                children: [
                  {
                    id: 'video10',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video10_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=e-smz21Jy_Y&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=1',
                      },
                    ],
                  },
                  {
                    id: 'topics10',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic10_1',
                        name: '0:00 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=e-smz21Jy_Y&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2',
                      },
                      {
                        id: 'topic10_2',
                        name: '9:57 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=e-smz21Jy_Y&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2&t=597s',
                      },
                      {
                        id: 'topic10_3',
                        name: '12:59 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=e-smz21Jy_Y&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2&t=779s',
                      },
                      {
                        id: 'topic10_4',
                        name: '17:34 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=e-smz21Jy_Y&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2&t=1054s',
                      },
                      {
                        id: 'topic10_5',
                        name: '20:46 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=e-smz21Jy_Y&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2&t=1246s',
                      },
                      {
                        id: 'topic10_6',
                        name: '27:08 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=e-smz21Jy_Y&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2&t=1628s',
                      },
                      {
                        id: 'topic10_7',
                        name: '32:09 - Doubt 7',
                        url: 'https://www.youtube.com/watch?v=e-smz21Jy_Y&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2&t=1929s',
                      },
                      {
                        id: 'topic10_8',
                        name: '35:16 - Doubt 8',
                        url: 'https://www.youtube.com/watch?v=e-smz21Jy_Y&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2&t=2116s',
                      },
                      {
                        id: 'topic10_9',
                        name: '42:17 - Doubt 9',
                        url: 'https://www.youtube.com/watch?v=e-smz21Jy_Y&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2&t=2537s',
                      },
                      {
                        id: 'topic10_10',
                        name: '49:16 - Doubt 10',
                        url: 'https://www.youtube.com/watch?v=e-smz21Jy_Y&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2&t=2956s',
                      },
                      {
                        id: 'topic10_11',
                        name: '54:52 - Doubt 11',
                        url: 'https://www.youtube.com/watch?v=e-smz21Jy_Y&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2&t=3292s',
                      },
                      {
                        id: 'topic10_12',
                        name: '59:40 - Doubt 12',
                        url: 'https://www.youtube.com/watch?v=e-smz21Jy_Y&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2&t=3580s',
                      },
                      {
                        id: 'topic10_13',
                        name: '1:02:30 - Doubt 13',
                        url: 'https://www.youtube.com/watch?v=e-smz21Jy_Y&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2&t=3750s',
                      },
                      {
                        id: 'topic10_14',
                        name: '1:06:59 - Doubt 14',
                        url: 'https://www.youtube.com/watch?v=e-smz21Jy_Y&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2&t=4019s',
                      }
                    ],
                  },
                  {
                    id: 'summary10',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary10_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1qclqa9eaeNRPOwrS0wgE4090hwZA7FE-EkQFP6MwRXM/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework10',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework10_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture11',
                name: 'Lecture 11',
                children: [
                  {
                    id: 'video11',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video11_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=RmqdTF4TzWo&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=4',
                      },
                    ],
                  },
                  {
                    id: 'topics11',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic11_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=RmqdTF4TzWo&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5',
                      },
                      {
                        id: 'topic11_2',
                        name: '6:24 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=RmqdTF4TzWo&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5&t=384s',
                      },
                      {
                        id: 'topic11_3',
                        name: '10:20 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=RmqdTF4TzWo&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5&t=620s',
                      },
                      {
                        id: 'topic11_4',
                        name: '13:37 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=RmqdTF4TzWo&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5&t=817s',
                      },
                      {
                        id: 'topic11_5',
                        name: '19:29 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=RmqdTF4TzWo&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5&t=1169s',
                      },
                      {
                        id: 'topic11_6',
                        name: '23:49 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=RmqdTF4TzWo&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5&t=1429s',
                      },
                      {
                        id: 'topic11_7',
                        name: '26:29 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=RmqdTF4TzWo&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5&t=1589s',
                      },
                      {
                        id: 'topic11_8',
                        name: '30:24 - Doubt 7',
                        url: 'https://www.youtube.com/watch?v=RmqdTF4TzWo&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5&t=1824s',
                      },
                      {
                        id: 'topic11_9',
                        name: '34:13 - Doubt 8',
                        url: 'https://www.youtube.com/watch?v=RmqdTF4TzWo&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5&t=2053s',
                      },
                      {
                        id: 'topic11_10',
                        name: '39:41 - Doubt 9',
                        url: 'https://www.youtube.com/watch?v=RmqdTF4TzWo&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5&t=2381s',
                      },
                      {
                        id: 'topic11_11',
                        name: '43:09 - Doubt 10',
                        url: 'https://www.youtube.com/watch?v=RmqdTF4TzWo&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=5&t=2589s',
                      }
                    ],
                  },
                  {
                    id: 'summary11',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary11_content',
                        name: 'View Summary Document',
                        url: 'http://docs.google.com/document/d/15ULM1bx0ziN6oHsSoJCKQ8OxYL0jgkXb932GqoN-Jpo/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework11',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework11_content',
                        name: 'https://docs.google.com/document/d/1PaoyeXOBaTwKAKEbLpnQSXmHFx2QAiM2IhSNA7aS3OQ/edit?tab=t.0'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture12',
                name: 'Lecture 12',
                children: [
                  {
                    id: 'video12',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video12_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=2bhT4FUZS2M&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=3',
                      },
                    ],
                  },
                  {
                    id: 'topics12',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic12_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=2bhT4FUZS2M&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=4',
                      },
                      {
                        id: 'topic12_2',
                        name: '9:01 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=2bhT4FUZS2M&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=4&t=541s',
                      },
                      {
                        id: 'topic12_3',
                        name: '14:11 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=2bhT4FUZS2M&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=4&t=851s',
                      },
                      {
                        id: 'topic12_4',
                        name: '42:13 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=2bhT4FUZS2M&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=4&t=2533s',
                      },
                      {
                        id: 'topic12_5',
                        name: '48:11 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=2bhT4FUZS2M&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=4&t=2891s',
                      },
                      {
                        id: 'topic12_6',
                        name: '52:16 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=2bhT4FUZS2M&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=4&t=3136s',
                      },
                      {
                        id: 'topic12_7',
                        name: '1:00:54 - Question 1',
                        url: 'https://www.youtube.com/watch?v=2bhT4FUZS2M&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=4&t=3654s',
                      }
                    ],
                  },
                  {
                    id: 'summary12',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary12_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1e3KniD_jgAwOEMsyT-aS7C5016lo0Pxx6De91UF6o8I/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework12',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework12_content',
                        name: 'https://docs.google.com/document/d/1nKf28reIuOrYZ0Uwpw4hLcy2q3VpCqgMI3pb7npS-3U/edit?tab=t.0'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture13',
                name: 'Lecture 13',
                children: [
                  {
                    id: 'video13',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video13_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=64GBMlPoio8&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2',
                      },
                    ],
                  },
                  {
                    id: 'topics13',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic13_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=64GBMlPoio8&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=3',
                      },
                      {
                        id: 'topic13_2',
                        name: '6:11 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=64GBMlPoio8&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=3&t=371s',
                      },
                      {
                        id: 'topic13_3',
                        name: '11:17 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=64GBMlPoio8&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=3&t=677s',
                      },
                      {
                        id: 'topic13_4',
                        name: '21:26 - Question 1',
                        url: 'https://www.youtube.com/watch?v=64GBMlPoio8&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=3&t=1286s',
                      },
                      {
                        id: 'topic13_5',
                        name: '38:42 - Question 2',
                        url: 'https://www.youtube.com/watch?v=64GBMlPoio8&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=3&t=2322s',
                      },
                      {
                        id: 'topic13_6',
                        name: '58:50 - Question 3',
                        url: 'https://www.youtube.com/watch?v=64GBMlPoio8&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=3&t=3530s',
                      }
                    ],
                  },
                  {
                    id: 'summary13',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary13_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1ugtG_4ZxIjGCp-k_hQr6m5R2JSeJmLGziT92_o09ZY0/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework13',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework13_content',
                        name: 'https://docs.google.com/document/d/1CO3d-IDqDmMr-QpQUXyhDuLeXsmy8t2yS_3V0H2WN00/edit?tab=t.0'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture14',
                name: 'Lecture 14',
                children: [
                  {
                    id: 'video14',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video14_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=SCWk6WY7UeY&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=1',
                      },
                    ],
                  },
                  {
                    id: 'topics14',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic14_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=SCWk6WY7UeY&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2',
                      },
                      {
                        id: 'topic14_2',
                        name: '8:55 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=SCWk6WY7UeY&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2&t=535s',
                      },
                      {
                        id: 'topic14_3',
                        name: '24:08 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=SCWk6WY7UeY&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2&t=1448s',
                      },
                      {
                        id: 'topic14_4',
                        name: '30:19 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=SCWk6WY7UeY&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2&t=1819s',
                      },
                      {
                        id: 'topic14_5',
                        name: '33:56 - Question 1',
                        url: 'https://www.youtube.com/watch?v=SCWk6WY7UeY&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2&t=2036s',
                      },
                      {
                        id: 'topic14_6',
                        name: '52:21 - Question 2',
                        url: 'https://www.youtube.com/watch?v=SCWk6WY7UeY&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2&t=3141s',
                      },
                      {
                        id: 'topic14_7',
                        name: '1:04:42 - Question 3',
                        url: 'https://www.youtube.com/watch?v=SCWk6WY7UeY&list=PL1id2Mcm30777nhU6AvfdNp5tT1te8OKm&index=2&t=3882s',
                      }
                    ],
                  },
                  {
                    id: 'summary14',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary14_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1jGVZzPFZzdXAFE-fO3Jbr7wVYGicZao0pi0HAG7FSX8/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework14',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework14_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
             }
            ]
          }
        ]
      }
    ],
  },
  {
    id: 'class8',
    name: 'Class 8',
    children: [
      {
        id: 'physics',
        name: 'Physics',
        children: [
          {
            id: 'graphs and motion',
            name: 'Graphs and Motion',
            children: [
              {
                id: 'lecture1',
                name: 'Lecture 1',
                children: [
                  {
                    id: 'video1',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video1_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=OsoSvvBqe74&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=1',
                      },
                    ],
                  },
                  {
                    id: 'topics1',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic1_1',
                        name: '0:00 - TPL and Displacement',
                        url: 'https://www.youtube.com/watch?v=OsoSvvBqe74&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=2',
                      },
                      {
                        id: 'topic1_2',
                        name: '13:29 - Trivia Question',
                        url: 'https://www.youtube.com/watch?v=OsoSvvBqe74&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=2&t=809s',
                      },
                      {
                        id: 'topic1_3',
                        name: '29:29 - Question 1',
                        url: 'https://www.youtube.com/watch?v=OsoSvvBqe74&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=2&t=1769s',
                      },
                      {
                        id: 'topic1_4',
                        name: '36:50 - Question 2',
                        url: 'https://www.youtube.com/watch?v=OsoSvvBqe74&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=2&t=2210s',
                      },
                      {
                        id: 'topic1_5',
                        name: '48:18 - Question 3',
                        url: 'https://www.youtube.com/watch?v=OsoSvvBqe74&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=2&t=2898s',
                      },
                      {
                        id: 'topic1_6',
                        name: '55:58 - Question 4',
                        url: 'https://www.youtube.com/watch?v=OsoSvvBqe74&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=2&t=3358s',
                      },
                    ],
                  },
                  {
                    id: 'summary1',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary1_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1QVpyKzdXW-bIjLrfmkR0fO2JNZu3Zbk_yTFRwS8XLFg/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework1',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework1_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1RNpddZbFEjWpzMADZ-s7fTvwZJgX2ebTagdEXh1eiEs/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture2',
                name: 'Lecture 2',
                children: [
                  {
                    id: 'video2',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video2_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=2',
                      },
                    ],
                  },
                  {
                    id: 'topics2',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic2_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3',
                      },
                      {
                        id: 'topic2_2',
                        name: '5:37 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=337s',
                      },
                      {
                        id: 'topic2_3',
                        name: '8:52 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=532s',
                      },
                      {
                        id: 'topic2_4',
                        name: '12:03 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=723s',
                      },
                      {
                        id: 'topic2_5',
                        name: '15:04 - Concept',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=904s',
                      },
                      {
                        id: 'topic2_6',
                        name: '17:53 - Question 1',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=1073s',
                      },
                      {
                        id: 'topic2_7',
                        name: '23:30 - Direction',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=1410s',
                      },
                      {
                        id: 'topic2_8',
                        name: '27:00 - Angles',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=1620s',
                      },
                      {
                        id: 'topic2_9',
                        name: '29:09 - Examples',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=1749s',
                      },
                      {
                        id: 'topic2_10',
                        name: '32:42 - Discussion',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=1962s',
                      },
                      {
                        id: 'topic2_11',
                        name: '36:51 - Questions 2,3,4',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=2211s',
                      },
                      {
                        id: 'topic2_12',
                        name: '49:52 - Question 5',
                        url: 'https://www.youtube.com/watch?v=kjK6xEidREQ&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3&t=2992s',
                      }
                    ],
                  },
                  {
                    id: 'summary2',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary2_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1onmjtZW6mAz4h8zv_q7n4uL-y2COPnC_rJe_xp_UEDI/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework2',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework2_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1wiAQa5oaraZOCudvl7V_oFaVhz0AVfZKJ4IGbTIPn1o/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture3',
                name: 'Lecture 3',
                children: [
                  {
                    id: 'video3',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video3_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=3',
                      },
                    ],
                  },
                  {
                    id: 'topics3',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic3_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4',
                      },
                      {
                        id: 'topic3_2',
                        name: '5:25 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=325s',
                      },
                      {
                        id: 'topic3_3',
                        name: '8:47 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=527s',
                      },
                      {
                        id: 'topic3_4',
                        name: '16:00 - Concept 1',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=960s',
                      },
                      {
                        id: 'topic3_5',
                        name: '20:31 - Question 1',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=1231s',
                      },
                      {
                        id: 'topic3_6',
                        name: '23:21 - Question 2',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=1401s',
                      },
                      {
                        id: 'topic3_7',
                        name: '25:10 - Question 3',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=1510s',
                      },
                      {
                        id: 'topic3_8',
                        name: '29:43 - Question 4',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=1783s',
                      },
                      {
                        id: 'topic3_9',
                        name: '31:22 - Question 5',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=1882s',
                      },
                      {
                        id: 'topic3_10',
                        name: '34:18 - Question 6',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=2058s',
                      },
                      {
                        id: 'topic3_11',
                        name: '42:46 - Doubt 2(continued)',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=2566s',
                      },
                      {
                        id: 'topic3_12',
                        name: '46:09 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=2769s',
                      },
                      {
                        id: 'topic3_13',
                        name: '48:33 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=2913s',
                      },
                      {
                        id: 'topic3_14',
                        name: '52:51 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=3171s',
                      },
                      {
                        id: 'topic3_15',
                        name: '56:29 - Concept 2',
                        url: 'https://www.youtube.com/watch?v=tgTSidmGsu4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4&t=3389s',
                      }
                    ],
                  },
                  {
                    id: 'summary3',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary3_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1aE5EFTL2blOes6cv-yum56AK0NWaupU-eg2kjNYk5n8/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework3',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework3_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1gmixu0l8Q4uZmFZe38d10BFKl-oEebHa_rp8dexjHWo/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture4',
                name: 'Lecture 4',
                children: [
                  {
                    id: 'video4',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video4_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=uLGDU1XXnjI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=4',
                      },
                    ],
                  },
                  {
                    id: 'topics4',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic4_1',
                        name: '0:00 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=uLGDU1XXnjI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=5',
                      },
                      {
                        id: 'topic4_2',
                        name: '14:05 - Question 1',
                        url: 'https://www.youtube.com/watch?v=uLGDU1XXnjI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=5&t=845s',
                      },
                      {
                        id: 'topic4_3',
                        name: '32:15 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=uLGDU1XXnjI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=5&t=1935s',
                      },
                      {
                        id: 'topic4_4',
                        name: '43:27 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=uLGDU1XXnjI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=5&t=2607s',
                      },
                      {
                        id: 'topic4_5',
                        name: '49:27 - Concept',
                        url: 'https://www.youtube.com/watch?v=uLGDU1XXnjI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=5&t=2967s',
                      },
                      {
                        id: 'topic4_6',
                        name: '50:35 - Question 2',
                        url: 'https://www.youtube.com/watch?v=uLGDU1XXnjI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=5&t=3035s',
                      },
                      {
                        id: 'topic4_7',
                        name: '55:48 - Trigonometry',
                        url: 'https://www.youtube.com/watch?v=uLGDU1XXnjI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=5&t=3348s',
                      },
                      {
                        id: 'topic4_8',
                        name: '1:12:29 - Question 3',
                        url: 'https://www.youtube.com/watch?v=uLGDU1XXnjI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=5&t=4349s',
                      }
                    ],
                  },
                  {
                    id: 'summary4',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary4_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1tMNwkiNDPRg-KnLiT2m6Ur2e4bFYYU1dzaAhsbnGLjI/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework4',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework4_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1Kdsqzu5h0zdm4DkE6MzX6dxQyr8r6QUEcD_Y6oxJqzo/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture5',
                name: 'Lecture 5',
                children: [
                  {
                    id: 'video5',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video5_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=rIbH_mMvtXc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=5',
                      },
                    ],
                  },
                  {
                    id: 'topics5',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic5_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=rIbH_mMvtXc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=6',
                      },
                      {
                        id: 'topic5_2',
                        name: '6:30 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=rIbH_mMvtXc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=6&t=390s',
                      },
                      {
                        id: 'topic5_3',
                        name: '8:06 - Question 1',
                        url: 'https://www.youtube.com/watch?v=rIbH_mMvtXc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=6&t=486s',
                      },
                      {
                        id: 'topic5_4',
                        name: '22:54 - Question 2',
                        url: 'https://www.youtube.com/watch?v=rIbH_mMvtXc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=6&t=1374s',
                      },
                      {
                        id: 'topic5_5',
                        name: '36:03 - Question 3',
                        url: 'https://www.youtube.com/watch?v=rIbH_mMvtXc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=6&t=2163s',
                      },
                      {
                        id: 'topic5_6',
                        name: '42:13 - Concept',
                        url: 'https://www.youtube.com/watch?v=rIbH_mMvtXc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=6&t=2533s',
                      },
                      {
                        id: 'topic5_7',
                        name: '57:23 - Question 4',
                        url: 'https://www.youtube.com/watch?v=rIbH_mMvtXc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=6&t=3443s',
                      }
                    ],
                  },
                  {
                    id: 'summary5',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary5_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1_O62tKesDFqoPBZnYLNiDH6Y7qTq1z0oe11vbZ3_Fkk/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework5',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework5_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1bfooCkDKcsmz5Rmf_AO1yP4MZBpNfGFkaRceJe4bHL4/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture6',
                name: 'Lecture 6',
                children: [
                  {
                    id: 'video6',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video6_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=Spok3vdVzr4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=6',
                      },
                    ],
                  },
                  {
                    id: 'topics6',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic6_1',
                        name: '0:00 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=Spok3vdVzr4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=7',
                      },
                      {
                        id: 'topic6_2',
                        name: '9:46 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=Spok3vdVzr4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=7&t=586s',
                      },
                      {
                        id: 'topic6_3',
                        name: '15:19 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=Spok3vdVzr4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=7&t=919s',
                      },
                      {
                        id: 'topic6_4',
                        name: '24:39 - Question 1',
                        url: 'https://www.youtube.com/watch?v=Spok3vdVzr4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=7&t=1479s',
                      },
                      {
                        id: 'topic6_5',
                        name: '38:53 - Concept',
                        url: 'https://www.youtube.com/watch?v=Spok3vdVzr4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=7&t=2333s',
                      },
                      {
                        id: 'topic6_6',
                        name: '55:48 - Question 2',
                        url: 'https://www.youtube.com/watch?v=Spok3vdVzr4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=7&t=3348s',
                      },
                      {
                        id: 'topic6_7',
                        name: '1:02:25 - Concept',
                        url: 'https://www.youtube.com/watch?v=Spok3vdVzr4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=7&t=3745s',
                      },
                      {
                        id: 'topic6_8',
                        name: '1:04:56 - Question 3',
                        url: 'https://www.youtube.com/watch?v=Spok3vdVzr4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=7&t=3896s',
                      }
                    ],
                  },
                  {
                    id: 'summary6',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary6_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1no7ByqcjG_DdpQzjDQtjOcBEyynTuJ5_j_v6BnWaemg/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework6',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework6_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1ofHQPaJtnovLgLd0I8jQt0A_JsQk_FWvitFIorTb4mU/edit?tab=t.0',
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture7',
                name: 'Lecture 7',
                children: [
                  {
                    id: 'video7',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video7_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=wxbKjx6sqOo&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=7',
                      },
                    ],
                  },
                  {
                    id: 'topics7',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic7_1',
                        name: '0:00 - Homework Discussion',
                        url: 'https://www.youtube.com/watch?v=wxbKjx6sqOo&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=8',
                      },
                      {
                        id: 'topic7_2',
                        name: '4:32 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=wxbKjx6sqOo&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=8&t=272s',
                      },
                      {
                        id: 'topic7_3',
                        name: '11:50 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=wxbKjx6sqOo&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=8&t=710s',
                      },
                      {
                        id: 'topic7_4',
                        name: '35:56 - Concept',
                        url: 'https://www.youtube.com/watch?v=wxbKjx6sqOo&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=8&t=2156s',
                      },
                      {
                        id: 'topic7_5',
                        name: '40:32 - Question 1',
                        url: 'https://www.youtube.com/watch?v=wxbKjx6sqOo&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=8&t=2432s',
                      },
                      {
                        id: 'topic7_6',
                        name: '56:35 - Question 2',
                        url: 'https://www.youtube.com/watch?v=wxbKjx6sqOo&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=8&t=3395s',
                      }
                    ],
                  },
                  {
                    id: 'summary7',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary7_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1LRby6Q5uA8BS8GE7odgN8RsUfHDK-kbFz_h5FyfmcJE/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework7',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework7_content',
                        name: 'No Homework was Assigned'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture8',
                name: 'Lecture 8',
                children: [
                  {
                    id: 'video8',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video8_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=7OybG_Weyfc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=8',
                      },
                    ],
                  },
                  {
                    id: 'topics8',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic8_1',
                        name: '0:00 - Concept of Integration',
                        url: 'https://www.youtube.com/watch?v=7OybG_Weyfc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=9',
                      },
                      {
                        id: 'topic8_2',
                        name: '18:52 - Question 1',
                        url: 'https://www.youtube.com/watch?v=7OybG_Weyfc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=9&t=1132s',
                      },
                      {
                        id: 'topic8_3',
                        name: '31:52 - Question 2',
                        url: 'https://www.youtube.com/watch?v=7OybG_Weyfc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=9&t=1912s',
                      },
                      {
                        id: 'topic8_4',
                        name: '51:23 - Concept',
                        url: 'https://www.youtube.com/watch?v=7OybG_Weyfc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=9&t=3083s',
                      },
                      {
                        id: 'topic8_5',
                        name: '54:44 - Question 3',
                        url: 'https://www.youtube.com/watch?v=7OybG_Weyfc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=9&t=3284s',
                      }
                    ],
                  },
                  {
                    id: 'summary8',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary8_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1JBaLu263Xpona4NjHWG5QbtuVOj4wIFaLOVAaB8IPiY/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework8',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework8_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/19qXeTQWN4X7oChjpHdKmmKe9acMqvWcu3eVP3MKzqLc/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture9',
                name: 'Lecture 9',
                children: [
                  {
                    id: 'video9',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video9_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=9',
                      },
                    ],
                  },
                  {
                    id: 'topics9',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic9_1',
                        name: '0:00 - Homework Discussion',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10',
                      },
                      {
                        id: 'topic9_2',
                        name: '7:12 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=432s',
                      },
                      {
                        id: 'topic9_3',
                        name: '11:07 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=667s',
                      },
                      {
                        id: 'topic9_4',
                        name: '16:20 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=980s',
                      },
                      {
                        id: 'topic9_5',
                        name: '19:57 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=1197s',
                      },
                      {
                        id: 'topic9_6',
                        name: '22:31 - Concept',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=1351s',
                      },
                      {
                        id: 'topic9_7',
                        name: '35:18 - Question 1',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=2118s',
                      },
                      {
                        id: 'topic9_8',
                        name: '42:42 - Question 2',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=2562s',
                      },
                      {
                        id: 'topic9_9',
                        name: '51:13 - Question 3',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=3073s',
                      },
                      {
                        id: 'topic9_10',
                        name: '1:01:39 - Question 4',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=3699s',
                      },
                      {
                        id: 'topic9_11',
                        name: '1:17:29 - Question 5',
                        url: 'https://www.youtube.com/watch?v=Vzfp8EEYCC0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10&t=4649s',
                      }
                    ],
                  },
                  {
                    id: 'summary9',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary9_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1gzRTxZDOfqs3Fl9Va2UqfVMo7NjfCDOtxWBegvn2PME/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework9',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework9_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1n_n7VxWSNdmhLPm3XPjo9GJ8aGQNw9PZHNKo0LsEcCE/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture10',
                name: 'Lecture 10',
                children: [
                  {
                    id: 'video10',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video10_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=I66S9xXAKho&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=10',
                      },
                    ],
                  },
                  {
                    id: 'topics10',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic10_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=I66S9xXAKho&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=11',
                      },
                      {
                        id: 'topic10_2',
                        name: '7:45 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=I66S9xXAKho&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=11&t=465s',
                      },
                      {
                        id: 'topic10_3',
                        name: '11:26 - Question 1',
                        url: 'https://www.youtube.com/watch?v=I66S9xXAKho&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=11&t=686s',
                      },
                      {
                        id: 'topic10_4',
                        name: '24:35 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=I66S9xXAKho&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=11&t=1475s',
                      },
                      {
                        id: 'topic10_5',
                        name: '28:38 - Question 2',
                        url: 'https://www.youtube.com/watch?v=I66S9xXAKho&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=11&t=1718s',
                      },
                      {
                        id: 'topic10_6',
                        name: '49:18 - Question 3',
                        url: 'https://www.youtube.com/watch?v=I66S9xXAKho&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=11&t=2958s',
                      },
                      {
                        id: 'topic10_7',
                        name: '1:05:55 - Question 4',
                        url: 'https://www.youtube.com/watch?v=I66S9xXAKho&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=11&t=3955s',
                      }
                    ],
                  },
                  {
                    id: 'summary10',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary10_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1PJwaX2_dB3pWVLu6WF2IbhOChBczYlc3y3W57cUnQ5s/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework10',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework10_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1cNGJvSvVEnjHHynnIqQjwIfEv101m7YQ026tU3HOrzQ/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture11',
                name: 'Lecture 11',
                children: [
                  {
                    id: 'video11',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video11_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=B37rhGxjKgI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=11',
                      },
                    ],
                  },
                  {
                    id: 'topics11',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic11_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=B37rhGxjKgI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=12',
                      },
                      {
                        id: 'topic11_2',
                        name: '5:03 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=B37rhGxjKgI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=12&t=303s',
                      },
                      {
                        id: 'topic11_3',
                        name: '7:18 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=B37rhGxjKgI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=12&t=438s',
                      },
                      {
                        id: 'topic11_4',
                        name: '10:25 - Question 1',
                        url: 'https://www.youtube.com/watch?v=B37rhGxjKgI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=12&t=625s',
                      },
                      {
                        id: 'topic11_5',
                        name: '17:50 - Question 2',
                        url: 'https://www.youtube.com/watch?v=B37rhGxjKgI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=12&t=1070s',
                      },
                      {
                        id: 'topic11_6',
                        name: '27:38 - Question 3',
                        url: 'https://www.youtube.com/watch?v=B37rhGxjKgI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=12&t=1658s',
                      },
                      {
                        id: 'topic11_7',
                        name: '38:39 - Question 4',
                        url: 'https://www.youtube.com/watch?v=B37rhGxjKgI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=12&t=2319s',
                      }
                    ],
                  },
                  {
                    id: 'summary11',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary11_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1xA1aWtuhLI36oGJcg-7_EvANRtJxLCEofNxNnniOl1I/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework11',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework11_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1inYH8NuA4P82kpea2cSIKrxqBeOjbJiQSBjOS_3dU_8/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture12',
                name: 'Lecture 12',
                children: [
                  {
                    id: 'video12',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video12_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=VQxkTh_ou7E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=12',
                      },
                    ],
                  },
                  {
                    id: 'topics12',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic12_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=VQxkTh_ou7E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=13',
                      },
                      {
                        id: 'topic12_2',
                        name: '6:32 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=VQxkTh_ou7E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=13&t=392s',
                      },
                      {
                        id: 'topic12_3',
                        name: '9:35 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=VQxkTh_ou7E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=13&t=575s',
                      },
                      {
                        id: 'topic12_4',
                        name: '13:21 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=VQxkTh_ou7E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=13&t=801s',
                      },
                      {
                        id: 'topic12_5',
                        name: '17:21 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=VQxkTh_ou7E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=13&t=1041s',
                      },
                      {
                        id: 'topic12_6',
                        name: '21:26 - Question 1',
                        url: 'https://www.youtube.com/watch?v=VQxkTh_ou7E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=13&t=1286s',
                      },
                      {
                        id: 'topic12_7',
                        name: '46:00 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=VQxkTh_ou7E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=13&t=2760s',
                      },
                      {
                        id: 'topic12_8',
                        name: '54:55 - Question 2',
                        url: 'https://www.youtube.com/watch?v=VQxkTh_ou7E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=13&t=3295s',
                      },
                      {
                        id: 'topic12_9',
                        name: '1:06:10 - Concept: Slope',
                        url: 'https://www.youtube.com/watch?v=VQxkTh_ou7E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=13&t=3970s',
                      },
                      {
                        id: 'topic12_10',
                        name: '1:11:20 - Question 3',
                        url: 'https://www.youtube.com/watch?v=VQxkTh_ou7E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=13&t=4280s',
                      },
                      {
                        id: 'topic12_11',
                        name: '1:16:25 - Slope Equation',
                        url: 'https://www.youtube.com/watch?v=VQxkTh_ou7E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=13&t=4585s',
                      },
                      {
                        id: 'topic12_12',
                        name: '1:32:11 - Question 4',
                        url: 'https://www.youtube.com/watch?v=VQxkTh_ou7E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=13&t=5531s',
                      }
                    ],
                  },
                  {
                    id: 'summary12',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary12_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1o6kE8i4tt4TLVSbkUN43vV8Xm9AIbgUJPpCAOugkkj4/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework12',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework12_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1RbF5WAFJPo0Th4VLKTjTsVvH5XUgSyYHprte-6kwGp8/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture13',
                name: 'Lecture 13',
                children: [
                  {
                    id: 'video13',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video13_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=uAim4DF_wmI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=13',
                      },
                    ],
                  },
                  {
                    id: 'topics13',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic13_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=uAim4DF_wmI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=14',
                      },
                      {
                        id: 'topic13_2',
                        name: '6:08 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=uAim4DF_wmI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=14&t=368s',
                      },
                      {
                        id: 'topic13_3',
                        name: '11:00 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=uAim4DF_wmI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=14&t=660s',
                      },
                      {
                        id: 'topic13_4',
                        name: '21:15 - Concept',
                        url: 'https://www.youtube.com/watch?v=uAim4DF_wmI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=14&t=1275s',
                      },
                      {
                        id: 'topic13_5',
                        name: '36:35 - Question 1',
                        url: 'https://www.youtube.com/watch?v=uAim4DF_wmI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=14&t=2195s',
                      },
                      {
                        id: 'topic13_6',
                        name: '52:03 - Question 2',
                        url: 'https://www.youtube.com/watch?v=uAim4DF_wmI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=14&t=3123s',
                      }
                    ],
                  },
                  {
                    id: 'summary13',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary13_content',
                        name: 'View Summary Document',
                        url: 'http://docs.google.com/document/d/10GjLOaQWdaq8DRvbMnML8eK6XlVPlTUO8k-hPcGOavI/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework13',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework13_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1Y0to6eJGFD4jOsIWgrcb0-nFiymu64iIYmszkOqp3RA/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture14',
                name: 'Lecture 14',
                children: [
                  {
                    id: 'video14',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video14_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=c5AMm7RwtJc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=14',
                      },
                    ],
                  },
                  {
                    id: 'topics14',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic14_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=c5AMm7RwtJc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=15',
                      },
                      {
                        id: 'topic14_2',
                        name: '6:05 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=c5AMm7RwtJc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=15&t=365s',
                      },
                      {
                        id: 'topic14_3',
                        name: '11:55 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=c5AMm7RwtJc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=15&t=715s',
                      },
                      {
                        id: 'topic14_4',
                        name: '21:02 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=c5AMm7RwtJc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=15&t=1262s',
                      },
                      {
                        id: 'topic14_5',
                        name: '39:35 - Question 1',
                        url: 'https://www.youtube.com/watch?v=c5AMm7RwtJc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=15&t=2375s',
                      }
                    ],
                  },
                  {
                    id: 'summary14',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary14_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/18OIYHSQlfRiKm7L2JGbM8CDVnrIESPisBh7zBm4h_UA/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework14',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework14_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1D51nzJR9lXJoRvPu51a4Hyl5-hc1DnZUK35OI5UMJOY/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture15',
                name: 'Lecture 15',
                children: [
                  {
                    id: 'video15',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video15_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=jmznl3LS478&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=15',
                      },
                    ],
                  },
                  {
                    id: 'topics15',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic15_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=jmznl3LS478&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=16',
                      },
                      {
                        id: 'topic15_2',
                        name: '2:36 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=jmznl3LS478&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=16&t=156s',
                      },
                      {
                        id: 'topic15_3',
                        name: '8:17 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=jmznl3LS478&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=16&t=497s',
                      },
                      {
                        id: 'topic15_4',
                        name: '16:49 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=jmznl3LS478&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=16&t=1009s',
                      },
                      {
                        id: 'topic15_5',
                        name: '21:22 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=jmznl3LS478&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=16&t=1282s',
                      },
                      {
                        id: 'topic15_6',
                        name: '25:02 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=jmznl3LS478&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=16&t=1502s',
                      },
                      {
                        id: 'topic15_7',
                        name: '33:04 - Concept 1',
                        url: 'https://www.youtube.com/watch?v=jmznl3LS478&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=16&t=1984s',
                      },
                      {
                        id: 'topic15_8',
                        name: '50:49 - Question 1',
                        url: 'https://www.youtube.com/watch?v=jmznl3LS478&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=16&t=3049s',
                      },
                      {
                        id: 'topic15_9',
                        name: '59:45 - Concept 2',
                        url: 'https://www.youtube.com/watch?v=jmznl3LS478&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=16&t=3585s',
                      },
                      {
                        id: 'topic15_10',
                        name: '1:03:40 - Question 2',
                        url: 'https://www.youtube.com/watch?v=jmznl3LS478&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=16&t=3820s',
                      }
                    ],
                  },
                  {
                    id: 'summary15',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary15_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1W47sjcewCJF7ao8szXom1hntGfHYT5I7U5GFM7-MPGw/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework15',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework15_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1uk_HhcOqVuRM212cNT43PD5_rrlgBrWR92cyjIiaQeA/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture16',
                name: 'Lecture 16',
                children: [
                  {
                    id: 'video16',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video16_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=-taiCLzgX5s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=16',
                      },
                    ],
                  },
                  {
                    id: 'topics16',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic16_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=-taiCLzgX5s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=17',
                      },
                      {
                        id: 'topic16_2',
                        name: '3:44 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=-taiCLzgX5s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=17&t=224s',
                      },
                      {
                        id: 'topic16_3',
                        name: '7:28 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=-taiCLzgX5s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=17&t=448s',
                      },
                      {
                        id: 'topic16_4',
                        name: '10:49 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=-taiCLzgX5s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=17&t=649s',
                      },
                      {
                        id: 'topic16_5',
                        name: '17:53 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=-taiCLzgX5s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=17&t=1073s',
                      },
                      {
                        id: 'topic16_6',
                        name: '22:56 - Concept',
                        url: 'https://www.youtube.com/watch?v=-taiCLzgX5s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=17&t=1376s',
                      },
                      {
                        id: 'topic16_7',
                        name: '37:46 - Question 1',
                        url: 'https://www.youtube.com/watch?v=-taiCLzgX5s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=17&t=2266s',
                      },
                      {
                        id: 'topic16_8',
                        name: '48:56 - Question 2',
                        url: 'https://www.youtube.com/watch?v=-taiCLzgX5s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=17&t=2936s',
                      },
                      {
                        id: 'topic16_9',
                        name: '1:02:30 - Question 3',
                        url: 'https://www.youtube.com/watch?v=-taiCLzgX5s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=17&t=3750s',
                      }
                    ],
                  },
                  {
                    id: 'summary16',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary16_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1kIy7-8_YVPHqmillBrfdf44mD1f9B2zsprSg4ISC5Qs/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework16',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework16_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture17',
                name: 'Lecture 17',
                children: [
                  {
                    id: 'video17',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video17_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=4bJDici8Hf8&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=17',
                      },
                    ],
                  },
                  {
                    id: 'topics17',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic17_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=4bJDici8Hf8&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=18',
                      },
                      {
                        id: 'topic17_2',
                        name: '17:27 - Question 2',
                        url: 'https://www.youtube.com/watch?v=4bJDici8Hf8&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=18&t=1047s',
                      },
                      {
                        id: 'topic17_3',
                        name: '31:43 - Question 3',
                        url: 'https://youtu.be/4bJDici8Hf8?list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&t=1903',
                      },
                      {
                        id: 'topic17_4',
                        name: '46:08 - Question 4',
                        url: 'https://www.youtube.com/watch?v=4bJDici8Hf8&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=18&t=2768s',
                      }
                    ],
                  },
                  {
                    id: 'summary17',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary17_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1jLw3u_H-EGG2BFyMdJHPdJ_GDBEViejemotCu4JZPbE/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework17',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework17_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1NHVDrUasFg6FVx9BJnPo3nI1vGTI4SJ9a1A6LGbkiCM/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture18',
                name: 'Lecture 18',
                children: [
                  {
                    id: 'video18',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video18_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=nVFJP0_RQ1g&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=18',
                      },
                    ],
                  },
                  {
                    id: 'topics18',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic18_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=nVFJP0_RQ1g&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=19',
                      },
                      {
                        id: 'topic18_2',
                        name: '6:26 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=nVFJP0_RQ1g&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=19&t=386s',
                      },
                      {
                        id: 'topic18_3',
                        name: '8:36 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=nVFJP0_RQ1g&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=19&t=516s',
                      },
                      {
                        id: 'topic18_4',
                        name: '11:37 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=nVFJP0_RQ1g&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=19&t=697s',
                      },
                      {
                        id: 'topic18_5',
                        name: '15:41 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=nVFJP0_RQ1g&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=19&t=941s',
                      },
                      {
                        id: 'topic18_6',
                        name: '18:12 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=nVFJP0_RQ1g&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=19&t=1092s',
                      },
                      {
                        id: 'topic18_7',
                        name: '20:13 - Concept',
                        url: 'https://www.youtube.com/watch?v=nVFJP0_RQ1g&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=19&t=1213s',
                      }
                    ],
                  },
                  {
                    id: 'summary18',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary18_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1wvbrd2n1W3ZuHfmcCfDieabYs2hSp9Ff4dj5jEOzk5c/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework18',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework18_content',
                        name: 'No Homewrok was assigned'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture19',
                name: 'Lecture 19',
                children: [
                  {
                    id: 'video19',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video19_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=29-F_lXL-Do&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=19',
                      },
                    ],
                  },
                  {
                    id: 'topics19',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic19_1',
                        name: '0:00 - Introduction',
                        url: 'https://www.youtube.com/watch?v=29-F_lXL-Do&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=20',
                      },
                      {
                        id: 'topic19_2',
                        name: '1:52 - Demonstration of Problem',
                        url: 'https://www.youtube.com/watch?v=29-F_lXL-Do&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=20&t=112s',
                      },
                      {
                        id: 'topic19_3',
                        name: '6:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=29-F_lXL-Do&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=20&t=360s',
                      },
                      {
                        id: 'topic19_4',
                        name: '14:49 - Concept',
                        url: 'https://www.youtube.com/watch?v=29-F_lXL-Do&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=20&t=889s',
                      },
                      {
                        id: 'topic19_5',
                        name: '30:01 - Question 2',
                        url: 'https://www.youtube.com/watch?v=29-F_lXL-Do&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=20&t=1801s',
                      },
                      {
                        id: 'topic19_6',
                        name: '55:14 - Question 3',
                        url: 'https://youtu.be/29-F_lXL-Do?list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&t=3314',
                      }
                    ],
                  },
                  {
                    id: 'summary19',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary19_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1KyBWSBDabvkMcy2V6tiFun5_VyB2aJJUBG5b8VrCaK8/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework19',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework19_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1PIPBnArHVDOrz_ZCZaXrtJVrszO0YiwJnYnWCHhBw7c/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture20',
                name: 'Lecture 20',
                children: [
                  {
                    id: 'video20',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video20_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=FU1tbRo8y0g&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=20',
                      },
                    ],
                  },
                  {
                    id: 'topics20',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic20_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=FU1tbRo8y0g&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=21',
                      },
                      {
                        id: 'topic20_2',
                        name: '3:24 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=FU1tbRo8y0g&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=21&t=204s',
                      },
                      {
                        id: 'topic20_3',
                        name: '14:09 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=FU1tbRo8y0g&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=21&t=849s',
                      },
                      {
                        id: 'topic20_4',
                        name: '18:54 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=FU1tbRo8y0g&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=21&t=1134s',
                      },
                      {
                        id: 'topic20_5',
                        name: '25:28 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=FU1tbRo8y0g&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=21&t=1528s',
                      },
                      {
                        id: 'topic20_6',
                        name: '31:30 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=FU1tbRo8y0g&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=21&t=1890s',
                      },
                      {
                        id: 'topic20_7',
                        name: '35:00 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=FU1tbRo8y0g&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=21&t=2100s',
                      },
                      {
                        id: 'topic20_8',
                        name: '40:44 - Question 1',
                        url: 'https://www.youtube.com/watch?v=FU1tbRo8y0g&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=21&t=2444s',
                      },
                      {
                        id: 'topic20_9',
                        name: '55:03 - Question 2',
                        url: 'https://www.youtube.com/watch?v=FU1tbRo8y0g&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=21&t=3303s',
                      },
                      {
                        id: 'topic20_10',
                        name: '1:15:31 - Discussion',
                        url: 'https://www.youtube.com/watch?v=FU1tbRo8y0g&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=21&t=4531s',
                      }
                    ],
                  },
                  {
                    id: 'summary20',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary20_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1gqQigh83R4coLCk2cHpZM-qeFklKyvRK4uxZB81AZYM/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework20',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework20_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1BWlosgCVVQAYaLmkytvjxOAS5NLaZ1fmUFr2QZcIkBM/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture21',
                name: 'Lecture 21',
                children: [
                  {
                    id: 'video21',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video21_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=Zpqzj2Ntskc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=21',
                      },
                    ],
                  },
                  {
                    id: 'topics21',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic21_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=Zpqzj2Ntskc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=22',
                      },
                      {
                        id: 'topic21_2',
                        name: '4:11 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=Zpqzj2Ntskc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=22&t=251s',
                      },
                      {
                        id: 'topic21_3',
                        name: '9:49 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=Zpqzj2Ntskc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=22&t=589s',
                      },
                      {
                        id: 'topic21_4',
                        name: '11:31 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=Zpqzj2Ntskc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=22&t=691s',
                      },
                      {
                        id: 'topic21_5',
                        name: '20:06 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=Zpqzj2Ntskc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=22&t=1206s',
                      },
                      {
                        id: 'topic21_6',
                        name: '25:42 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=Zpqzj2Ntskc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=22&t=1542s',
                      },
                      {
                        id: 'topic21_7',
                        name: '41:41 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=Zpqzj2Ntskc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=22&t=2501s',
                      }
                    ],
                  },
                  {
                    id: 'summary21',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary21_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1b4K4FQHSOwp9tEsGFqDJuGuIb7R5-1W26tSd1mZrYc4/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework21',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework21_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1YXzoGe33IhCTwBey0rIAN9XWh6__K5n8rjnJJH7SWoY/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture22',
                name: 'Lecture 22',
                children: [
                  {
                    id: 'video22',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video22_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=qdt2U2B3GrI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=22',
                      },
                    ],
                  },
                  {
                    id: 'topics22',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic22_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=qdt2U2B3GrI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=23',
                      },
                      {
                        id: 'topic22_2',
                        name: '18:18 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=qdt2U2B3GrI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=23&t=1098s',
                      },
                      {
                        id: 'topic22_3',
                        name: '24:30 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=qdt2U2B3GrI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=23&t=1470s',
                      },
                      {
                        id: 'topic22_4',
                        name: '30:33 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=qdt2U2B3GrI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=23&t=1833s',
                      },
                      {
                        id: 'topic22_5',
                        name: '34:46 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=qdt2U2B3GrI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=23&t=2086s',
                      },
                      {
                        id: 'topic22_6',
                        name: '37:01 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=qdt2U2B3GrI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=23&t=2221s',
                      },
                      {
                        id: 'topic22_7',
                        name: '42:16 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=qdt2U2B3GrI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=23&t=2536s',
                      },
                      {
                        id: 'topic22_8',
                        name: '48:33 - Concept',
                        url: 'https://www.youtube.com/watch?v=qdt2U2B3GrI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=23&t=2913s',
                      },
                      {
                        id: 'topic22_9',
                        name: '50:24 - Question 2',
                        url: 'https://www.youtube.com/watch?v=qdt2U2B3GrI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=23&t=3024s',
                      },
                      {
                        id: 'topic22_10',
                        name: '56:31 - Question 3',
                        url: 'https://www.youtube.com/watch?v=qdt2U2B3GrI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=23&t=3391s',
                      },
                      {
                        id: 'topic22_11',
                        name: '1:01:54 - Question 4',
                        url: 'https://www.youtube.com/watch?v=qdt2U2B3GrI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=23&t=3714s',
                      },
                      {
                        id: 'topic22_12',
                        name: '1:06:27 - Question 5',
                        url: 'https://www.youtube.com/watch?v=qdt2U2B3GrI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=23&t=3987s',
                      },
                      {
                        id: 'topic22_13',
                        name: '1:22:26 - Question 6',
                        url: 'https://www.youtube.com/watch?v=qdt2U2B3GrI&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=23&t=4946s',
                      },
                      {
                        id: 'topic22_14',
                        name: '1:35:37 - Question 7',
                        url: 'https://youtu.be/qdt2U2B3GrI?list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&t=5737',
                      }
                    ],
                  },
                  {
                    id: 'summary22',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary22_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/19FCPxduCf_MKpvb2C-48pQ3X5CpxJb-DiNzP7JRYcic/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework22',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework22_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1R7KqkxOrDzAHEpiINgpafQXb16rt1dwIqmJNXPDFNu8/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture23',
                name: 'Lecture 23',
                children: [
                  {
                    id: 'video23',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video23_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=UzlLTW-l-6c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=23',
                      },
                    ],
                  },
                  {
                    id: 'topics23',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic23_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=UzlLTW-l-6c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=24',
                      },
                      {
                        id: 'topic23_2',
                        name: '4:31 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=UzlLTW-l-6c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=24&t=271s',
                      },
                      {
                        id: 'topic23_3',
                        name: '7:51 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=UzlLTW-l-6c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=24&t=471s',
                      },
                      {
                        id: 'topic23_4',
                        name: '10:32 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=UzlLTW-l-6c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=24&t=632s',
                      },
                      {
                        id: 'topic23_5',
                        name: '14:36 - Concept',
                        url: 'https://www.youtube.com/watch?v=UzlLTW-l-6c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=24&t=876s',
                      },
                      {
                        id: 'topic23_6',
                        name: '18:24 - Question 1',
                        url: 'https://www.youtube.com/watch?v=UzlLTW-l-6c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=24&t=1104s',
                      },
                      {
                        id: 'topic23_7',
                        name: '33:12 - Question 2',
                        url: 'https://www.youtube.com/watch?v=UzlLTW-l-6c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=24&t=1992s',
                      },
                      {
                        id: 'topic23_8',
                        name: '44:01 - Question 3',
                        url: 'https://www.youtube.com/watch?v=UzlLTW-l-6c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=24&t=2641s',
                      },
                      {
                        id: 'topic23_9',
                        name: '51:05 - Question 4',
                        url: 'https://www.youtube.com/watch?v=UzlLTW-l-6c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=24&t=3065s',
                      }
                    ],
                  },
                  {
                    id: 'summary23',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary23_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1ajsaFqHoVb32OG_p5us1i9ddtPSWuEKoY0nSSFO4a3A/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework23',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework23_content',
                        name: 'NO Homework was assigned'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture24',
                name: 'Lecture 24',
                children: [
                  {
                    id: 'video24',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video24_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=-6NsMXYErGw&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=24',
                      },
                    ],
                  },
                  {
                    id: 'topics24',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic24_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=-6NsMXYErGw&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=25',
                      },
                      {
                        id: 'topic24_2',
                        name: '3:58 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=-6NsMXYErGw&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=25&t=238s',
                      },
                      {
                        id: 'topic24_3',
                        name: '17:48 - Question 1',
                        url: 'https://www.youtube.com/watch?v=-6NsMXYErGw&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=25&t=1068s',
                      },
                      {
                        id: 'topic24_4',
                        name: '30:36 - Question 2',
                        url: 'https://www.youtube.com/watch?v=-6NsMXYErGw&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=25&t=1836s',
                      },
                      {
                        id: 'topic24_5',
                        name: '50:43 - Question 3',
                        url: 'https://www.youtube.com/watch?v=-6NsMXYErGw&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=25&t=3043s',
                      },
                      {
                        id: 'topic24_6',
                        name: '1:11:08 - Question 4',
                        url: 'https://www.youtube.com/watch?v=-6NsMXYErGw&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=25&t=4268s',
                      }
                    ],
                  },
                  {
                    id: 'summary24',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary24_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1tju54htVFxWUiacEyy4jPtkn7kjhHBs-y3GRM1bBqlA/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework24',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework24_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture25',
                name: 'Lecture 25',
                children: [
                  {
                    id: 'video25',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video25_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=1KHNkEIKC3c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=25',
                      },
                    ],
                  },
                  {
                    id: 'topics25',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic25_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=1KHNkEIKC3c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=26',
                      },
                      {
                        id: 'topic25_2',
                        name: '4:39 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=1KHNkEIKC3c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=26&t=279s',
                      },
                      {
                        id: 'topic25_3',
                        name: '7:28 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=1KHNkEIKC3c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=26&t=448s',
                      },
                      {
                        id: 'topic25_4',
                        name: '9:04 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=1KHNkEIKC3c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=26&t=544s',
                      },
                      {
                        id: 'topic25_5',
                        name: '13:19 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=1KHNkEIKC3c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=26&t=799s',
                      },
                      {
                        id: 'topic25_6',
                        name: '16:46 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=1KHNkEIKC3c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=26&t=1006s',
                      },
                      {
                        id: 'topic25_7',
                        name: '21:54 - Question 1',
                        url: 'https://www.youtube.com/watch?v=1KHNkEIKC3c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=26&t=1314s',
                      },
                      {
                        id: 'topic25_8',
                        name: '45:23 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=1KHNkEIKC3c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=26&t=2723s',
                      },
                      {
                        id: 'topic25_9',
                        name: '54:47 - Doubt 7',
                        url: 'https://www.youtube.com/watch?v=1KHNkEIKC3c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=26&t=3287s',
                      },
                      {
                        id: 'topic25_10',
                        name: '57:25 - Question 2',
                        url: 'https://www.youtube.com/watch?v=1KHNkEIKC3c&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=26&t=3445s',
                      }
                    ],
                  },
                  {
                    id: 'summary25',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary25_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1F9rLGY9DPgOZwNjBFmJa3HyVNFxTtLzJ7i3MvpYcoZ8/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework25',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework25_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1tlDRAQjcIFHO4-POnoseeZ3gYnnQtVPljGGt1oROxB4/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture26',
                name: 'Lecture 26',
                children: [
                  {
                    id: 'video26',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video26_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=z1ri885uQPA&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=26',
                      },
                    ],
                  },
                  {
                    id: 'topics26',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic26_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=z1ri885uQPA&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=27',
                      },
                      {
                        id: 'topic26_2',
                        name: '7:48 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=z1ri885uQPA&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=27&t=468s',
                      },
                      {
                        id: 'topic26_3',
                        name: '12:55 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=z1ri885uQPA&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=27&t=775s',
                      },
                      {
                        id: 'topic26_4',
                        name: '17:03- Question 1',
                        url: 'https://www.youtube.com/watch?v=z1ri885uQPA&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=27&t=1023s',
                      },
                      {
                        id: 'topic26_5',
                        name: '43:04 - Concept',
                        url: 'https://www.youtube.com/watch?v=z1ri885uQPA&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=27&t=2584s',
                      },
                      {
                        id: 'topic26_6',
                        name: '47:46 - Question 2',
                        url: 'https://www.youtube.com/watch?v=z1ri885uQPA&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=27&t=2866s',
                      }
                    ],
                  },
                  {
                    id: 'summary26',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary26_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1yAN3vcUUhxMKinpoNOOekapwtRwZ3vZ8-GR_ea9ms9s/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework26',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework26_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1maCL8aFMXy8CwWbONIpWYCeCd-aAFWzM_jrHRMYcTDY/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture27',
                name: 'Lecture 27',
                children: [
                  {
                    id: 'video27',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video27_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=w_p_QJJDywM&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=27',
                      },
                    ],
                  },
                  {
                    id: 'topics27',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic27_1',
                        name: '0:00 - Introduction',
                        url: 'https://www.youtube.com/watch?v=w_p_QJJDywM&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=28',
                      },
                      {
                        id: 'topic27_2',
                        name: '16:46 - Concept and Question',
                        url: 'https://www.youtube.com/watch?v=w_p_QJJDywM&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=28&t=1006s',
                      }
                    ],
                  },
                  {
                    id: 'summary27',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary27_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1fIBahrz62gVaQSLI3enWAiLmh3A9DJe7oK-GFrzCVc4/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework27',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework27_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1UwTY6WdX3qiTUZZghl2vRZ3b4caaA7I9xu3ePKViQaQ/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture28',
                name: 'Lecture 28',
                children: [
                  {
                    id: 'video28',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video28_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=yj5EHZd_ez4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=28',
                      },
                    ],
                  },
                  {
                    id: 'topics28',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic28_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=yj5EHZd_ez4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=29',
                      },
                      {
                        id: 'topic28_2',
                        name: '4:52 - Question 1',
                        url: 'https://www.youtube.com/watch?v=yj5EHZd_ez4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=29&t=292s',
                      },
                      {
                        id: 'topic28_3',
                        name: '31:34 - Doubt ',
                        url: 'https://www.youtube.com/watch?v=yj5EHZd_ez4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=29&t=1894s',
                      },
                      {
                        id: 'topic28_4',
                        name: '42:25- Question 2',
                        url: 'https://www.youtube.com/watch?v=yj5EHZd_ez4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=29&t=2545s',
                      },
                      {
                        id: 'topic28_5',
                        name: '58:39 - Question 3',
                        url: 'https://www.youtube.com/watch?v=yj5EHZd_ez4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=29&t=3519s',
                      }
                    ],
                  },
                  {
                    id: 'summary28',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary28_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1QOC9ehnI8hui-U2djoWJTJFon25EqjuwtqUtDi4h19g/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework28',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework28_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture29',
                name: 'Lecture 29',
                children: [
                  {
                    id: 'video29',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video29_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=FSNqF1l_S5o&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=29',
                      },
                    ],
                  },
                  {
                    id: 'topics29',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic29_1',
                        name: '0:00 - Concept',
                        url: 'https://www.youtube.com/watch?v=FSNqF1l_S5o&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=30',
                      },
                      {
                        id: 'topic29_2',
                        name: '8:41 - Question 1',
                        url: 'https://www.youtube.com/watch?v=FSNqF1l_S5o&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=30&t=521s',
                      },
                      {
                        id: 'topic29_3',
                        name: '22:29 - Concept',
                        url: 'https://www.youtube.com/watch?v=FSNqF1l_S5o&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=30&t=1349s',
                      },
                      {
                        id: 'topic29_4',
                        name: '39:31- Question 2',
                        url: 'https://www.youtube.com/watch?v=FSNqF1l_S5o&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=30&t=2371s',
                      }
                    ],
                  },
                  {
                    id: 'summary29',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary29_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1BiP-FjO8n1hEMTe_PrMt37BBqJvxsnR0wMH0zDqIKCw/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework29',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework29_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/11acVpkHNMJ0Gi2oNXHLsUNNgoBAgi8tVfMl_M_jYGgU/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture30',
                name: 'Lecture 30',
                children: [
                  {
                    id: 'video30',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video30_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=J1_yP01FB3E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=30',
                      },
                    ],
                  },
                  {
                    id: 'topics30',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic30_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=J1_yP01FB3E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=31',
                      },
                      {
                        id: 'topic30_2',
                        name: '4:02 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=J1_yP01FB3E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=31&t=242s',
                      },
                      {
                        id: 'topic30_3',
                        name: '7:29 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=J1_yP01FB3E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=31&t=449s',
                      },
                      {
                        id: 'topic30_4',
                        name: '11:41- Doubt 3',
                        url: 'https://www.youtube.com/watch?v=J1_yP01FB3E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=31&t=701s',
                      },
                      {
                        id: 'topic30_5',
                        name: '16:04 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=J1_yP01FB3E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=31&t=964s',
                      },
                      {
                        id: 'topic30_6',
                        name: '21:31 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=J1_yP01FB3E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=31&t=1291s',
                      },
                      {
                        id: 'topic30_7',
                        name: '33:48 - Doubt 6',
                        url: 'https://youtu.be/J1_yP01FB3E?list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&t=2028',
                      },
                      {
                        id: 'topic30_8',
                        name: '44:09- Question 1',
                        url: 'https://www.youtube.com/watch?v=J1_yP01FB3E&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=31&t=2649s',
                      }
                    ],
                  },
                  {
                    id: 'summary30',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary30_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1qZ_fHuATob1v4ZyAuUPTPEwHtdzB7ydMboQoN3iwYXE/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework30',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework30_content',
                        name: 'No homework was assigned'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture31',
                name: 'Lecture 31',
                children: [
                  {
                    id: 'video31',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video31_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=6iLpSOXJxBk&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=31',
                      },
                    ],
                  },
                  {
                    id: 'topics31',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic31_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=6iLpSOXJxBk&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=32',
                      },
                      {
                        id: 'topic31_2',
                        name: '16:47 - Question 2',
                        url: 'https://www.youtube.com/watch?v=6iLpSOXJxBk&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=32&t=1007s',
                      }
                    ],
                  },
                  {
                    id: 'summary31',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary31_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1cjZwHDx_nJhB3wfLnGYouAVLKmSqlFRZkgcmbUeAtn4/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework31',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework31_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1nY97tkPMHOI_uS32ubpFOkIW2zmH9IqW101-zJ4eu40/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture32',
                name: 'Lecture 32',
                children: [
                  {
                    id: 'video32',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video32_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=EtplPoi2-14&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=32',
                      },
                    ],
                  },
                  {
                    id: 'topics32',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic32_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=EtplPoi2-14&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=33',
                      },
                      {
                        id: 'topic32_2',
                        name: '8:34 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=EtplPoi2-14&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=33&t=514s',
                      },
                      {
                        id: 'topic32_3',
                        name: '22:21 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=EtplPoi2-14&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=33&t=1341s',
                      },
                      {
                        id: 'topic32_4',
                        name: '23:00 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=EtplPoi2-14&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=33&t=1380s',
                      },
                      {
                        id: 'topic32_5',
                        name: '53:31 - Test Doubt 1',
                        url: 'https://www.youtube.com/watch?v=EtplPoi2-14&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=33&t=3211s',
                      },
                      {
                        id: 'topic32_6',
                        name: '51:53 - Test Doubt 2',
                        url: 'https://www.youtube.com/watch?v=EtplPoi2-14&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=33&t=3593s',
                      },
                      {
                        id: 'topic32_7',
                        name: '1:03:26 - Test Doubt 3',
                        url: 'https://youtu.be/EtplPoi2-14?list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&t=3806',
                      },
                      {
                        id: 'topic32_8',
                        name: '1:07:33 - Test Doubt 4',
                        url: 'https://www.youtube.com/watch?v=EtplPoi2-14&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=33&t=4053s',
                      },
                      {
                        id: 'topic32_9',
                        name: '1:12:51 - Test Doubt 5',
                        url: 'https://www.youtube.com/watch?v=EtplPoi2-14&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=33&t=4371s',
                      }
                    ],
                  },
                  {
                    id: 'summary32',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary32_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1JtGK0ei-ISnk1dj9MRgmnzcj0eYf2hOxWSip3lzAUSE/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework32',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework32_content',
                        name: 'No homework was assigned'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture33',
                name: 'Lecture 33',
                children: [
                  {
                    id: 'video33',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video33_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=44s-XoUeMIw&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=33',
                      },
                    ],
                  },
                  {
                    id: 'topics33',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic33_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=44s-XoUeMIw&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=34',
                      },
                      {
                        id: 'topic33_2',
                        name: '28:58 - Question 2',
                        url: 'https://www.youtube.com/watch?v=44s-XoUeMIw&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=34&t=1738s',
                      }
                    ],
                  },
                  {
                    id: 'summary33',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary33_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1DlwLwvFPkCjO-WOxiPAgTA1Oe4_6Z6yLUmaKllLl5Ts/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework33',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework33_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1nY97tkPMHOI_uS32ubpFOkIW2zmH9IqW101-zJ4eu40/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture34',
                name: 'Lecture 34',
                children: [
                  {
                    id: 'video34',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video34_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=_CfGIWz6LOU&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=34',
                      },
                    ],
                  },
                  {
                    id: 'topics34',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic34_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=_CfGIWz6LOU&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=35',
                      },
                      {
                        id: 'topic34_2',
                        name: '5:09 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=_CfGIWz6LOU&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=35&t=309s',
                      },
                      {
                        id: 'topic34_3',
                        name: '14:13 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=_CfGIWz6LOU&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=35&t=853s',
                      },
                      {
                        id: 'topic34_4',
                        name: '16:51 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=_CfGIWz6LOU&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=35&t=1011s',
                      },
                      {
                        id: 'topic34_5',
                        name: '20:30 - Concept',
                        url: 'https://www.youtube.com/watch?v=_CfGIWz6LOU&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=35&t=1230s',
                      },
                      {
                        id: 'topic34_6',
                        name: '32:04 - Question 1',
                        url: 'https://www.youtube.com/watch?v=_CfGIWz6LOU&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=35&t=1924s',
                      },
                      {
                        id: 'topic34_7',
                        name: '43:21 - Question 2',
                        url: 'https://www.youtube.com/watch?v=_CfGIWz6LOU&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=35&t=2601s',
                      },
                      {
                        id: 'topic34_8',
                        name: '1:02:23 - Question 3',
                        url: 'https://www.youtube.com/watch?v=_CfGIWz6LOU&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=35&t=3743s',
                      }
                    ],
                  },
                  {
                    id: 'summary34',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary34_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1BDUXwRmxdOXHl7fX9Y9UQnvbSCXHvaRnSOuwJ1hgrxc/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework34',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework34_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1ruo8-qTufEJDZMZhZsJNYMhMYpIZM7fz6GzHirku55o/edit?tab=t.0#heading=h.lce3fxhyrjs9'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture35',
                name: 'Lecture 35',
                children: [
                  {
                    id: 'video35',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video35_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=1LmlwtG62H4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=35',
                      },
                    ],
                  },
                  {
                    id: 'topics35',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic35_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=1LmlwtG62H4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=36',
                      },
                      {
                        id: 'topic35_2',
                        name: '5:10 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=1LmlwtG62H4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=36&t=310s',
                      },
                      {
                        id: 'topic35_3',
                        name: '7:11 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=1LmlwtG62H4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=36&t=431s',
                      },
                      {
                        id: 'topic35_4',
                        name: '8:59 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=1LmlwtG62H4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=36&t=539s',
                      },
                      {
                        id: 'topic35_5',
                        name: '14:31 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=1LmlwtG62H4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=36&t=871s',
                      },
                      {
                        id: 'topic35_6',
                        name: '18:37 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=1LmlwtG62H4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=36&t=1117s',
                      },
                      {
                        id: 'topic35_7',
                        name: '21:29 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=1LmlwtG62H4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=36&t=1289s',
                      },
                      {
                        id: 'topic35_8',
                        name: '24:21 - Doubt 7',
                        url: 'https://www.youtube.com/watch?v=1LmlwtG62H4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=36&t=1461s',
                      },
                      {
                        id: 'topic35_9',
                        name: '28:16 - Doubt 8',
                        url: 'https://www.youtube.com/watch?v=1LmlwtG62H4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=36&t=1696s',
                      },
                      {
                        id: 'topic35_10',
                        name: '29:43 - Doubt 9',
                        url: 'https://www.youtube.com/watch?v=1LmlwtG62H4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=36&t=1783s',
                      },
                      {
                        id: 'topic35_11',
                        name: '37:39 - Question 1',
                        url: 'https://www.youtube.com/watch?v=1LmlwtG62H4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=36&t=2259s',
                      },
                      {
                        id: 'topic35_12',
                        name: '51:26 - Question 2',
                        url: 'https://www.youtube.com/watch?v=1LmlwtG62H4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=36&t=3086s',
                      }
                    ],
                  },
                  {
                    id: 'summary35',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary35_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1sjc9UOz29ZuITNQ7Lh0FXiHeczEdYPiMjKMpgi_yi4E/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework35',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework35_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1PMsIrM-Ty04uL_NZmyXIOcIBz5mFw2DBie1Y_LVH-No/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture36',
                name: 'Lecture 36',
                children: [
                  {
                    id: 'video36',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video36_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=_rQQDiHE1e4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=36',
                      },
                    ],
                  },
                  {
                    id: 'topics36',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic36_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=_rQQDiHE1e4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=37',
                      },
                      {
                        id: 'topic36_2',
                        name: '2:58 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=_rQQDiHE1e4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=37&t=178s',
                      },
                      {
                        id: 'topic36_3',
                        name: '9:09 - Concept',
                        url: 'https://www.youtube.com/watch?v=_rQQDiHE1e4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=37&t=549s',
                      },
                      {
                        id: 'topic36_4',
                        name: '23:44 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=_rQQDiHE1e4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=37&t=1424s',
                      },
                      {
                        id: 'topic36_5',
                        name: '26:23 - Question 1',
                        url: 'https://www.youtube.com/watch?v=_rQQDiHE1e4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=37&t=1583s',
                      },
                      {
                        id: 'topic36_6',
                        name: '47:52 - Question 2',
                        url: 'https://www.youtube.com/watch?v=_rQQDiHE1e4&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=37&t=2872s',
                      }
                    ],
                  },
                  {
                    id: 'summary36',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary36_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/14e1uRMe9K-11nhe4PQvBLuRu9UuyKmd68KWJhlEHRBE/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework36',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework36_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1XNWXH7nMBVj4Wnl7DoqEWSPJUiV1l-5VPoHDgm9jB-A/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture37',
                name: 'Lecture 37',
                children: [
                  {
                    id: 'video37',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video37_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=KWYF5eUlcSc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=37',
                      },
                    ],
                  },
                  {
                    id: 'topics37',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic37_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=KWYF5eUlcSc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=38',
                      },
                      {
                        id: 'topic37_2',
                        name: '4:10 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=KWYF5eUlcSc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=38&t=250s',
                      },
                      {
                        id: 'topic37_3',
                        name: '8:29 - Concept',
                        url: 'https://www.youtube.com/watch?v=KWYF5eUlcSc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=38&t=509s',
                      },
                      {
                        id: 'topic37_4',
                        name: '10:40 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=KWYF5eUlcSc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=38&t=640s',
                      },
                      {
                        id: 'topic37_5',
                        name: '13:51 - Question 1',
                        url: 'https://www.youtube.com/watch?v=KWYF5eUlcSc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=38&t=831s',
                      },
                      {
                        id: 'topic37_6',
                        name: '17:12 - Question 2',
                        url: 'https://www.youtube.com/watch?v=KWYF5eUlcSc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=38&t=1032s',
                      },
                      {
                        id: 'topic37_7',
                        name: '21:38 - Question 1',
                        url: 'https://www.youtube.com/watch?v=KWYF5eUlcSc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=38&t=1298s',
                      },
                      {
                        id: 'topic37_8',
                        name: '24:25 - Question 2',
                        url: 'https://www.youtube.com/watch?v=KWYF5eUlcSc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=38&t=1465s',
                      }
                    ],
                  },
                  {
                    id: 'summary37',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary37_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/17hlFZ7bxSZTphcXsBrscuhtUb1BGGN-QXuN1FEn-aMM/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework37',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework37_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/14G-Fg9Xi6xgVRMSMV-fl5ccLuvCDlP7MJEjzvbdAnmQ/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture38',
                name: 'Lecture 38',
                children: [
                  {
                    id: 'video38',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video38_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=qcjhntgDtTY&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=38',
                      },
                    ],
                  },
                  {
                    id: 'topics38',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic38_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=qcjhntgDtTY&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=39',
                      },
                      {
                        id: 'topic38_2',
                        name: '6:45 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=qcjhntgDtTY&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=39&t=405s',
                      },
                      {
                        id: 'topic38_3',
                        name: '9:36 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=qcjhntgDtTY&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=39&t=576s',
                      },
                      {
                        id: 'topic38_4',
                        name: '12:53 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=qcjhntgDtTY&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=39&t=773s',
                      },
                      {
                        id: 'topic38_5',
                        name: '18:52 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=qcjhntgDtTY&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=39&t=1132s',
                      },
                      {
                        id: 'topic38_6',
                        name: '22:03 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=qcjhntgDtTY&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=39&t=1323s',
                      },
                      {
                        id: 'topic38_7',
                        name: '29:38 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=qcjhntgDtTY&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=39&t=1778s',
                      },
                      {
                        id: 'topic38_8',
                        name: '32:52 - Doubt 7',
                        url: 'https://www.youtube.com/watch?v=qcjhntgDtTY&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=39&t=1972s',
                      },
                      {
                        id: 'topic38_9',
                        name: '35:32 - Doubt 8',
                        url: 'https://www.youtube.com/watch?v=qcjhntgDtTY&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=39&t=2132s',
                      }
                    ],
                  },
                  {
                    id: 'summary38',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary38_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1i_LtZDKCdcDlk-H9AjMxdUnbuwOWPgL-x_GHDrORYuM/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework38',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework38_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture39',
                name: 'Lecture 39',
                children: [
                  {
                    id: 'video39',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video39_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=7rrMEZEBI5s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=39',
                      },
                    ],
                  },
                  {
                    id: 'topics39',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic39_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=7rrMEZEBI5s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=40',
                      },
                      {
                        id: 'topic39_2',
                        name: '14:01 - Question 2',
                        url: 'https://www.youtube.com/watch?v=7rrMEZEBI5s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=40&t=841s',
                      },
                      {
                        id: 'topic39_3',
                        name: '23:42 - Question 3',
                        url: 'https://www.youtube.com/watch?v=7rrMEZEBI5s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=40&t=1422s',
                      },
                      {
                        id: 'topic39_4',
                        name: '46:00 - Question 4',
                        url: 'https://www.youtube.com/watch?v=7rrMEZEBI5s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=40&t=2760s',
                      }
                    ],
                  },
                  {
                    id: 'summary39',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary39_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1H-ADZ7wDhTCyE0pwGOr6BAYhzWwYrhNJJwgRmWEQw8A/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework39',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework39_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/12klNs450fjzr4K3r0mcWVichwtfzoX5xfeQDgSJfVh8/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture40',
                name: 'Lecture 40',
                children: [
                  {
                    id: 'video40',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video40_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=PYKZDW1KmZ0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=40',
                      },
                    ],
                  },
                  {
                    id: 'topics40',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic40_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=PYKZDW1KmZ0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=41',
                      },
                      {
                        id: 'topic40_2',
                        name: '1:52 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=PYKZDW1KmZ0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=41&t=112s',
                      },
                      {
                        id: 'topic40_3',
                        name: '7:09 - Question 1',
                        url: 'https://www.youtube.com/watch?v=PYKZDW1KmZ0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=41&t=429s',
                      },
                      {
                        id: 'topi40_4',
                        name: '16:15 - Question 2',
                        url: 'https://www.youtube.com/watch?v=PYKZDW1KmZ0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=41&t=975s',
                      },
                      {
                        id: 'topic40_5',
                        name: '24:35 - Question 3',
                        url: 'https://www.youtube.com/watch?v=PYKZDW1KmZ0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=41&t=1475s',
                      },
                      {
                        id: 'topic40_6',
                        name: '39:22 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=PYKZDW1KmZ0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=41&t=2362s',
                      },
                      {
                        id: 'topic40_7',
                        name: '41:35 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=PYKZDW1KmZ0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=41&t=2495s',
                      },
                      {
                        id: 'topic40_8',
                        name: '46:20 - Concept',
                        url: 'https://www.youtube.com/watch?v=PYKZDW1KmZ0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=41&t=2780s',
                      },
                      {
                        id: 'topic40_9',
                        name: '1:10:55 - Question 4',
                        url: 'https://www.youtube.com/watch?v=PYKZDW1KmZ0&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=41&t=4255s',
                      }
                    ],
                  },
                  {
                    id: 'summary40',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary40_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1eQzMH92-V66Bkuwd9qp6JrmEcnFMVef8Q6AAwU-JExA/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework40',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework40_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture41',
                name: 'Lecture 41',
                children: [
                  {
                    id: 'video41',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video41_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=0h1CgeZXoOE&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=41',
                      },
                    ],
                  },
                  {
                    id: 'topics41',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic41_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=0h1CgeZXoOE&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=42',
                      },
                      {
                        id: 'topic41_2',
                        name: '6:16 - Question 2',
                        url: 'https://www.youtube.com/watch?v=0h1CgeZXoOE&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=42&t=376s',
                      },
                      {
                        id: 'topic41_3',
                        name: '13:34 - Question 3',
                        url: 'https://www.youtube.com/watch?v=0h1CgeZXoOE&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=42&t=814s',
                      },
                      {
                        id: 'topi41_4',
                        name: '25:18 - Question 4',
                        url: 'https://www.youtube.com/watch?v=0h1CgeZXoOE&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=42&t=1518s',
                      },
                      {
                        id: 'topic41_5',
                        name: '38:25 - Question 5',
                        url: 'https://www.youtube.com/watch?v=0h1CgeZXoOE&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=42&t=2305s',
                      },
                      {
                        id: 'topic41_6',
                        name: '47:16 - Question 6',
                        url: 'https://www.youtube.com/watch?v=0h1CgeZXoOE&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=42&t=2836s',
                      }
                    ],
                  },
                  {
                    id: 'summary41',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary41_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1zQS47vXOSSpZ_FS0K_P8gguY57vAjGUpYqQCDShZAj8/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework41',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework41_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1i1gzQpDIk-TsodhG4XNRKO5mdSAFp6mkOqXGoTUdA1E/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture42',
                name: 'Lecture 42',
                children: [
                  {
                    id: 'video42',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video42_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=e3ds-5FIg0s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=42',
                      },
                    ],
                  },
                  {
                    id: 'topics42',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic42_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=e3ds-5FIg0s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=43',
                      },
                      {
                        id: 'topic42_2',
                        name: '9:38 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=e3ds-5FIg0s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=43&t=578s',
                      },
                      {
                        id: 'topic42_3',
                        name: '13:50 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=e3ds-5FIg0s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=43&t=830s',
                      },
                      {
                        id: 'topi42_4',
                        name: '17:12 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=e3ds-5FIg0s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=43&t=1032s',
                      },
                      {
                        id: 'topic42_5',
                        name: '22:20 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=e3ds-5FIg0s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=43&t=1340s',
                      },
                      {
                        id: 'topic42_6',
                        name: '28:25 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=e3ds-5FIg0s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=43&t=1705s',
                      },
                      {
                        id: 'topi42_7',
                        name: '35:32 - Question 1',
                        url: 'https://www.youtube.com/watch?v=e3ds-5FIg0s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=43&t=2132s',
                      },
                      {
                        id: 'topic42_8',
                        name: '42:11 - Question 2',
                        url: 'https://www.youtube.com/watch?v=e3ds-5FIg0s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=43&t=2531s',
                      },
                      {
                        id: 'topic42_9',
                        name: '53:43 - Question 3',
                        url: 'https://www.youtube.com/watch?v=e3ds-5FIg0s&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=43&t=3223s',
                      }
                    ],
                  },
                  {
                    id: 'summary42',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary42_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1DVIrDPCxG9aLhTpqzvDetrq6wnA44fsB5xYpYSwtk7M/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework42',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework42_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1YJq1OjXF-ZDTfmS-97Kx1kO3JAgNXT0hjKwlOn81rI0/edit?tab=t.0'
                      },
                    ],
                  },
                ],
              },
              {
                id: 'lecture43',
                name: 'Lecture 43',
                children: [
                  {
                    id: 'video43',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video43_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=NlQn66mlMIc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=43',
                      },
                    ],
                  },
                  {
                    id: 'topics43',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic43_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=NlQn66mlMIc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=44',
                      },
                      {
                        id: 'topic43_2',
                        name: '5:25 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=NlQn66mlMIc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=44&t=325s',
                      },
                      {
                        id: 'topic43_3',
                        name: '13:38 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=NlQn66mlMIc&list=PL1id2Mcm3075t1u8jv4VeD15pXPq_1KQ8&index=44&t=818s',
                      }
                    ],
                  },
                  {
                    id: 'summary43',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary43_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1SeGSh__5wjjc5ZL-fLZzWx9e_GPmbaicgZ7FlxQyepw/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework43',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework43_content',
                        name: 'No Homework ws assigned'
                      },
                    ],
                  },
                ],
              }
            ],
          },
        ],
      },
      {
        id: 'math',
        name: 'Math',
        children: [
          {
            id: 'exponents and surds',
            name: 'Exponents and Surds',
            children: [
             {
                id: 'lecture1',
                name: 'Lecture 1',
                children: [
                  {
                    id: 'video1',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video1_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=Kt77QKcZwJg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=1',
                      },
                    ],
                  },
                  {
                    id: 'topics1',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic1_1',
                        name: '0:00 - Concept',
                        url: 'https://www.youtube.com/watch?v=Kt77QKcZwJg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=2',
                      },
                      {
                        id: 'topic1_2',
                        name: '3:31 - Question 1',
                        url: 'https://www.youtube.com/watch?v=Kt77QKcZwJg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=2&t=211s',
                      },
                      {
                        id: 'topic1_3',
                        name: '10:46 - Question 2',
                        url: 'https://www.youtube.com/watch?v=Kt77QKcZwJg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=2&t=646s',
                      },
                      {
                        id: 'topic1_4',
                        name: '19:22 - Question 3',
                        url: 'https://www.youtube.com/watch?v=Kt77QKcZwJg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=2&t=1162s',
                      },
                      {
                        id: 'topic1_5',
                        name: '38:56 - Concept',
                        url: 'https://www.youtube.com/watch?v=Kt77QKcZwJg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=2&t=2336s',
                      },
                      {
                        id: 'topic1_6',
                        name: '39:38 - Question 4',
                        url: 'https://www.youtube.com/watch?v=Kt77QKcZwJg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=2&t=2378s',
                      },
                      {
                        id: 'topic1_7',
                        name: '44:08 - Question 5',
                        url: 'https://www.youtube.com/watch?v=Kt77QKcZwJg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=2&t=2648s',
                      },
                      {
                        id: 'topic1_8',
                        name: '53:34 - Question 6',
                        url: 'https://www.youtube.com/watch?v=Kt77QKcZwJg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=2&t=3214s',
                      },
                      {
                        id: 'topic1_9',
                        name: '56:46 - Question 7',
                        url: 'https://www.youtube.com/watch?v=Kt77QKcZwJg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=2&t=3406s',
                      }
                    ],
                  },
                  {
                    id: 'summary1',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary1_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1YByn-C3bp7yEKmZp6Nw34ovdVVpga9qwCSt9dX1DHP0/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework1',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework1_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1iv6BFcHfkV4DVhFu2RTpb0cdY-h1lKBnBOGgcGBsaGE/edit?tab=t.0',
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture2',
                name: 'Lecture 2',
                children: [
                  {
                    id: 'video2',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video2_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=sw0DQ_vYVl8&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=2',
                      },
                    ],
                  },
                  {
                    id: 'topics2',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic2_1',
                        name: '0:00 - Homework Checking ',
                        url: 'https://www.youtube.com/watch?v=sw0DQ_vYVl8&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=3',
                      },
                      {
                        id: 'topic2_2',
                        name: '6:02 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=sw0DQ_vYVl8&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=3&t=362s',
                      },
                      {
                        id: 'topic2_3',
                        name: '11:38 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=sw0DQ_vYVl8&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=3&t=698s',
                      },
                      {
                        id: 'topic2_4',
                        name: '22:35 - Question 1',
                        url: 'https://www.youtube.com/watch?v=sw0DQ_vYVl8&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=3&t=1355s',
                      },
                      {
                        id: 'topic2_5',
                        name: '27:32 - Question 2',
                        url: 'https://www.youtube.com/watch?v=sw0DQ_vYVl8&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=3&t=1652s',
                      },
                      {
                        id: 'topic2_6',
                        name: '45:43 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=sw0DQ_vYVl8&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=3&t=2743s',
                      },
                      {
                        id: 'topic2_7',
                        name: '53:11 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=sw0DQ_vYVl8&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=3&t=3191s',
                      }
                    ],
                  },
                  {
                    id: 'summary2',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary2_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1-09hy1ZX-Q_2pc2i1nphSjL0SIHaQd-IhH377c3WeJU/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework2',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework2_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/18ABB69-xahBi6YOKlqAUQAcckbqKcAHdi7MHxa27Kvg/edit?tab=t.0#heading=h.e2duz1tr2als',
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture3',
                name: 'Lecture 3',
                children: [
                  {
                    id: 'video3',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video3_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=3',
                      },
                    ],
                  },
                  {
                    id: 'topics3',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic3_1',
                        name: '0:00 - Homework Checking ',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=4',
                      },
                      {
                        id: 'topic3_2',
                        name: '6:22 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=4&t=382s',
                      },
                      {
                        id: 'topic3_3',
                        name: '8:02 - Doubt 2 + Concept',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=4&t=482s',
                      },
                      {
                        id: 'topic3_4',
                        name: '13:52 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=4&t=832s',
                      },
                      {
                        id: 'topic3_5',
                        name: '16:16 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=4&t=976s',
                      },
                      {
                        id: 'topic3_6',
                        name: '20:48 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=4&t=1248s',
                      },
                      {
                        id: 'topic3_7',
                        name: '24:16 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=4&t=1456s',
                      },
                      {
                        id: 'topic3_8',
                        name: '26:31 - Doubt 7',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=4&t=1591s',
                      },
                      {
                        id: 'topic3_9',
                        name: '29:57 - Doubt 8',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=4&t=1797s',
                      },
                      {
                        id: 'topic3_10',
                        name: '33:52 - Doubt 9',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=4&t=2032s',
                      },
                      {
                        id: 'topic3_11',
                        name: '36:31 - Doubt 10',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=4&t=2191s',
                      },
                      {
                        id: 'topic3_12',
                        name: '41:26 - Doubt 11',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=4&t=2486s',
                      },
                      {
                        id: 'topic3_13',
                        name: '42:08 - Concept',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=4&t=2528s',
                      },
                      {
                        id: 'topic3_14',
                        name: '46:21 - Question 1',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=4&t=2781s',
                      },
                      {
                        id: 'topic3_15',
                        name: '49:19 - Question 2',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=4&t=2959s',
                      },
                      {
                        id: 'topic3_16',
                        name: '54:26 - Question 3',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=4&t=3266s',
                      },
                      {
                        id: 'topic3_17',
                        name: '1:05:14 - Question 4',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=4&t=3914s',
                      },
                      {
                        id: 'topic3_18',
                        name: '1:13:01 - Question 5',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=4&t=4381s',
                      }
                    ],
                  },
                  {
                    id: 'summary3',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary3_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1Pw70R1zde9BExgx5yHRyoFi4hi4VSQ6-kXNJjaAi5hI/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework3',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework3_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1CopmujHnwoma_vHEkGXC8MmV25TZOAO2yj83DUHbpXQ/edit?tab=t.0',
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture4',
                name: 'Lecture 4',
                children: [
                  {
                    id: 'video4',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video4_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=E-Q5xjSckpg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=4',
                      },
                    ],
                  },
                  {
                    id: 'topics4',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic4_1',
                        name: '0:00 - Homework Checking ',
                        url: 'https://www.youtube.com/watch?v=R1dvuxtsVo0&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=5',
                      },
                      {
                        id: 'topic4_2',
                        name: '5:58 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=R1dvuxtsVo0&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=5&t=358s',
                      },
                      {
                        id: 'topic4_3',
                        name: '8:48 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=R1dvuxtsVo0&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=5&t=528s',
                      },
                      {
                        id: 'topic4_4',
                        name: '13:56 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=R1dvuxtsVo0&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=5&t=836s',
                      },
                      {
                        id: 'topic4_5',
                        name: '25:02 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=R1dvuxtsVo0&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=5&t=1502s',
                      },
                      {
                        id: 'topic4_6',
                        name: '35:31 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=R1dvuxtsVo0&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=5&t=2131s',
                      },
                      {
                        id: 'topic4_7',
                        name: '43:57 - Question 1',
                        url: 'https://www.youtube.com/watch?v=R1dvuxtsVo0&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=5&t=2637s',
                      },
                      {
                        id: 'topic4_8',
                        name: '58:28 - Question 2',
                        url: 'https://www.youtube.com/watch?v=R1dvuxtsVo0&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=5&t=3508s',
                      }
                    ],
                  },
                  {
                    id: 'summary4',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary4_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1j2-kQpCm5mtaR392m5kMDbAXqHSlP-gbawIcV-oc2pQ/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework4',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework4_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1jZElZ5A6J8-8AOFosiOMzYXZkkJLa3PA9Z79A2Pk9DE/edit?tab=t.0#heading=h.bjphlnx7tlzj',
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture5',
                name: 'Lecture 5',
                children: [
                  {
                    id: 'video5',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video5_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=wKON1KL2ikA&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=5',
                      },
                    ],
                  },
                  {
                    id: 'topics5',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic5_1',
                        name: '0:00 - Homework Checking ',
                        url: 'https://www.youtube.com/watch?v=wKON1KL2ikA&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=6',
                      },
                      {
                        id: 'topic5_2',
                        name: '5:30 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=wKON1KL2ikA&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=6&t=330s',
                      },
                      {
                        id: 'topic5_3',
                        name: '7:16 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=wKON1KL2ikA&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=6&t=436s',
                      },
                      {
                        id: 'topic5_4',
                        name: '9:26 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=wKON1KL2ikA&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=6&t=566s',
                      },
                      {
                        id: 'topic5_5',
                        name: '10:48 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=wKON1KL2ikA&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=6&t=648s',
                      },
                      {
                        id: 'topic5_6',
                        name: '12:47 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=wKON1KL2ikA&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=6&t=767s',
                      },
                      {
                        id: 'topic5_7',
                        name: '16:36 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=wKON1KL2ikA&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=6&t=996s',
                      },
                      {
                        id: 'topic5_8',
                        name: '19:41 - Question 1',
                        url: 'https://www.youtube.com/watch?v=wKON1KL2ikA&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=6&t=1181s',
                      },
                      {
                        id: 'topic5_9',
                        name: '31:10 - Question 2',
                        url: 'https://www.youtube.com/watch?v=wKON1KL2ikA&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=6&t=1870s',
                      },
                      {
                        id: 'topic5_10',
                        name: '47:31 - Question 3',
                        url: 'https://www.youtube.com/watch?v=wKON1KL2ikA&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=6&t=2851s',
                      },
                      {
                        id: 'topic5_11',
                        name: '57:52 - Question 4',
                        url: 'https://www.youtube.com/watch?v=wKON1KL2ikA&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=6&t=3472s',
                      },
                      {
                        id: 'topic5_12',
                        name: '1:00:54 - Question 5',
                        url: 'https://www.youtube.com/watch?v=wKON1KL2ikA&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=6&t=3654s',
                      }
                    ],
                  },
                  {
                    id: 'summary5',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary5_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1ebI5ZyqrqKtLqpURr-np3ywLTQM_wKQPQHZII-zfAh4/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework5',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework5_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1yk16gBAdJGchW-bdEhk11hwLDzwuWUk5ao_rWOOw23o/edit?tab=t.0',
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture6',
                name: 'Lecture 6',
                children: [
                  {
                    id: 'video6',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video6_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=3tGTi61uv2Y&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=6',
                      },
                    ],
                  },
                  {
                    id: 'topics6',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic6_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=3tGTi61uv2Y&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=7',
                      },
                      {
                        id: 'topic6_2',
                        name: '2:56 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=3tGTi61uv2Y&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=7&t=176s',
                      },
                      {
                        id: 'topic6_3',
                        name: '4:44 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=3tGTi61uv2Y&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=7&t=284s',
                      },
                      {
                        id: 'topic6_4',
                        name: '6:37 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=3tGTi61uv2Y&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=7&t=397s',
                      },
                      {
                        id: 'topic6_5',
                        name: '8:08 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=3tGTi61uv2Y&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=7&t=488s',
                      },
                      {
                        id: 'topic6_6',
                        name: '9:45 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=3tGTi61uv2Y&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=7&t=585s',
                      },
                      {
                        id: 'topic6_7',
                        name: '13:49 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=3tGTi61uv2Y&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=7&t=829s',
                      },
                      {
                        id: 'topic6_8',
                        name: '20:56 - Doubt 7',
                        url: 'https://www.youtube.com/watch?v=3tGTi61uv2Y&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=7&t=1256s',
                      },
                      {
                        id: 'topic6_9',
                        name: '22:11 - Question 1',
                        url: 'https://www.youtube.com/watch?v=3tGTi61uv2Y&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=7&t=1331s',
                      },
                      {
                        id: 'topic6_10',
                        name: '48:39 - Question 2',
                        url: 'https://www.youtube.com/watch?v=3tGTi61uv2Y&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=7&t=2919s',
                      },
                      {
                        id: 'topic6_11',
                        name: '1:02:09 - Question 3',
                        url: 'https://www.youtube.com/watch?v=3tGTi61uv2Y&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=7&t=3729s',
                      }
                    ],
                  },
                  {
                    id: 'summary6',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary6_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1L3CD3gbv3o7QJIJSg3KUqbkg_OEVMT4JdFYe9BmksxE/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework6',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework6_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1QyGK8txjodYkSJkdjlO8uSoIVAdDwlUjxicDMpbeoyU/edit?tab=t.0',
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture7',
                name: 'Lecture 7',
                children: [
                  {
                    id: 'video7',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video7_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=UHdrCSbpWE4&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=7',
                      },
                    ],
                  },
                  {
                    id: 'topics7',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic7_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=UHdrCSbpWE4&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=8',
                      },
                      {
                        id: 'topic7_2',
                        name: '3:36 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=UHdrCSbpWE4&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=8&t=216s',
                      },
                      {
                        id: 'topic7_3',
                        name: '7:21 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=UHdrCSbpWE4&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=8&t=441s',
                      },
                      {
                        id: 'topic7_4',
                        name: '10:57 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=UHdrCSbpWE4&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=8&t=657s',
                      },
                      {
                        id: 'topic7_5',
                        name: '17:35 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=UHdrCSbpWE4&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=8&t=1055s',
                      },
                      {
                        id: 'topic7_6',
                        name: '10:43 - Doubt 5',
                        url: 'https://youtu.be/UHdrCSbpWE4?list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&t=1257',
                      },
                      {
                        id: 'topic7_7',
                        name: '25:53 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=UHdrCSbpWE4&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=8&t=1553s',
                      },
                      {
                        id: 'topic7_8',
                        name: '33:01 - Question 1',
                        url: 'https://www.youtube.com/watch?v=UHdrCSbpWE4&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=8&t=1981s',
                      },
                      {
                        id: 'topic7_9',
                        name: '40:27 - Question 2',
                        url: 'https://www.youtube.com/watch?v=UHdrCSbpWE4&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=8&t=2427s',
                      },
                      {
                        id: 'topic7_10',
                        name: '51:56 - Question 3',
                        url: 'https://www.youtube.com/watch?v=UHdrCSbpWE4&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=8&t=3116s',
                      }
                    ],
                  },
                  {
                    id: 'summary7',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary7_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1VhyMxybqjtbbqbhY6g8GKDZmzH1RFljAtM4LcTAbft4/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework7',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework7_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1WdUle7k2GAh7DZjoEzCR1MTzc4gKAI_RjNUvM5w0RHs/edit?tab=t.0',
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture8',
                name: 'Lecture 8',
                children: [
                  {
                    id: 'video8',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video8_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=Qm8Lk0CqaYY&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=8',
                      },
                    ],
                  },
                  {
                    id: 'topics8',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic8_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=Qm8Lk0CqaYY&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=9',
                      },
                      {
                        id: 'topic8_2',
                        name: '4:38 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=Qm8Lk0CqaYY&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=9&t=278s',
                      },
                      {
                        id: 'topic8_3',
                        name: '7:48 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=Qm8Lk0CqaYY&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=9&t=468s',
                      },
                      {
                        id: 'topic8_4',
                        name: '10:54 - Question 1',
                        url: 'https://www.youtube.com/watch?v=Qm8Lk0CqaYY&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=9&t=654s',
                      },
                      {
                        id: 'topic8_5',
                        name: '27:43 - Question 2',
                        url: 'https://www.youtube.com/watch?v=Qm8Lk0CqaYY&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=9&t=1663s',
                      },
                      {
                        id: 'topic8_6',
                        name: '41:08 - Question 3',
                        url: 'https://www.youtube.com/watch?v=Qm8Lk0CqaYY&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=9&t=2468s',
                      },
                      {
                        id: 'topic8_7',
                        name: '56:24 - Question 4',
                        url: 'https://www.youtube.com/watch?v=Qm8Lk0CqaYY&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=9&t=3384s',
                      },
                      {
                        id: 'topic8_8',
                        name: '1:02:32 - Question 5',
                        url: 'https://www.youtube.com/watch?v=Qm8Lk0CqaYY&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=9&t=3752s',
                      }
                    ],
                  },
                  {
                    id: 'summary8',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary8_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/15FeplNrnB_aw2fKQPAuxzs_R5PHQjl_PRyPOBgEv5EU/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework8',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework8_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1cxtiV8kaldjg3Fzp3ep7iTejhK-Kqq_BHvBPcGBaRhY/edit?tab=t.0',
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture9',
                name: 'Lecture 9',
                children: [
                  {
                    id: 'video9',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video9_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=EzmVIZlhKCM&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=9',
                      },
                    ],
                  },
                  {
                    id: 'topics9',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic9_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=EzmVIZlhKCM&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=10',
                      },
                      {
                        id: 'topic9_2',
                        name: '3:50 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=EzmVIZlhKCM&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=10&t=230s',
                      },
                      {
                        id: 'topic9_3',
                        name: '8:34 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=EzmVIZlhKCM&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=10&t=514s',
                      },
                      {
                        id: 'topic9_4',
                        name: '15:26 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=EzmVIZlhKCM&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=10&t=926s',
                      },
                      {
                        id: 'topic9_5',
                        name: '17:21 - Question 1',
                        url: 'https://www.youtube.com/watch?v=EzmVIZlhKCM&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=10&t=1041s',
                      },
                      {
                        id: 'topic9_6',
                        name: '22:47 - Concept',
                        url: 'https://www.youtube.com/watch?v=EzmVIZlhKCM&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=10&t=1367s',
                      },
                      {
                        id: 'topic9_7',
                        name: '39:52 - Question 2',
                        url: 'https://www.youtube.com/watch?v=EzmVIZlhKCM&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=10&t=2392s',
                      },
                      {
                        id: 'topic9_8',
                        name: '45:16 - Concept 2',
                        url: 'https://www.youtube.com/watch?v=EzmVIZlhKCM&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=10&t=2716s',
                      },
                      {
                        id: 'topic9_9',
                        name: '47:22 - Question 3',
                        url: 'https://www.youtube.com/watch?v=EzmVIZlhKCM&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=10&t=2842s',
                      },
                      {
                        id: 'topic9_10',
                        name: '51:04 - Question 4',
                        url: 'https://www.youtube.com/watch?v=EzmVIZlhKCM&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=10&t=3064s',
                      },
                      {
                        id: 'topic9_11',
                        name: '55:21 - Question 5',
                        url: 'https://www.youtube.com/watch?v=EzmVIZlhKCM&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=10&t=3321s',
                      }
                    ],
                  },
                  {
                    id: 'summary9',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary9_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1eAf5MRgW2XGtSTX_GxE_lv8XX-T89qWtL2Bxof1jjV8/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework9',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework9_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture10',
                name: 'Lecture 10',
                children: [
                  {
                    id: 'video10',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video10_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=LOQ1E2R4UxM&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=10',
                      },
                    ],
                  },
                  {
                    id: 'topics10',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic10_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=LOQ1E2R4UxM&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=11',
                      },
                      {
                        id: 'topic10_2',
                        name: '20:55 - Question 2',
                        url: 'https://www.youtube.com/watch?v=LOQ1E2R4UxM&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=11&t=1255s',
                      },
                      {
                        id: 'topic10_3',
                        name: '44:01 - Question 3',
                        url: 'https://www.youtube.com/watch?v=LOQ1E2R4UxM&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=11&t=2641s',
                      }
                    ],
                  },
                  {
                    id: 'summary10',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary10_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1uWj1Hkqj0ouJXL3qnHN4SEBDdWbyPHMT1Fhx-X5_CmQ/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework10',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework10_content',
                        name: 'View Homework Document',
                        url: "https://docs.google.com/document/d/11yipUBgIzEOoQFSG10UaXprbOL_HIXWyaNnsLBEEX8Y/edit?tab=t.0"
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture11',
                name: 'Lecture 11',
                children: [
                  {
                    id: 'video11',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video11_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=ECbbxseeDNg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=11',
                      },
                    ],
                  },
                  {
                    id: 'topics11',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic11_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=ECbbxseeDNg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=12',
                      },
                      {
                        id: 'topic11_2',
                        name: '6:36 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=ECbbxseeDNg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=12&t=396s',
                      },
                      {
                        id: 'topic11_3',
                        name: '12:02 - Question 1',
                        url: 'https://www.youtube.com/watch?v=ECbbxseeDNg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=12&t=722s',
                      },
                      {
                        id: 'topic11_4',
                        name: '23:58 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=ECbbxseeDNg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=12&t=1438s',
                      },
                      {
                        id: 'topic11_5',
                        name: '33:28 - Question 2',
                        url: 'https://www.youtube.com/watch?v=ECbbxseeDNg&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=12&t=2008s',
                      }
                    ],
                  },
                  {
                    id: 'summary11',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary11_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1nyTrAPVnfmdQxgC_gEAPQazgA7jEonYNpcTpkoeLYes/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework11',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework11_content',
                        name: 'View Homework Document',
                        url: "https://docs.google.com/document/d/1v9fT3mnR346pE4H4wr6GriOAolh7jaDE3Z7q6Atf_Jg/edit?tab=t.0"
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture12',
                name: 'Lecture 12',
                children: [
                  {
                    id: 'video12',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video12_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=0u5aSIafdXQ&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=12',
                      },
                    ],
                  },
                  {
                    id: 'topics12',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic12_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=0u5aSIafdXQ&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=13',
                      },
                      {
                        id: 'topic12_2',
                        name: '3:52 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=0u5aSIafdXQ&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=13&t=232s',
                      },
                      {
                        id: 'topic12_3',
                        name: '9:20 - Question 1',
                        url: 'https://www.youtube.com/watch?v=0u5aSIafdXQ&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=13&t=560s',
                      },
                      {
                        id: 'topic12_4',
                        name: '20:10 - Question 2',
                        url: 'https://www.youtube.com/watch?v=0u5aSIafdXQ&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=13&t=1210s',
                      },
                      {
                        id: 'topic12_5',
                        name: '24:05 - Concept',
                        url: 'https://www.youtube.com/watch?v=0u5aSIafdXQ&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=13&t=1445s',
                      },
                      {
                        id: 'topic12_6',
                        name: '43:59 - Question 3',
                        url: 'https://www.youtube.com/watch?v=0u5aSIafdXQ&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=13&t=2639s',
                      },
                      {
                        id: 'topic12_7',
                        name: '48:50 - Question 4',
                        url: 'https://www.youtube.com/watch?v=0u5aSIafdXQ&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=13&t=2930s',
                      },
                      {
                        id: 'topic12_8',
                        name: '1:11:07 - Question 5',
                        url: 'https://www.youtube.com/watch?v=0u5aSIafdXQ&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=13&t=4267s',
                      }
                    ],
                  },
                  {
                    id: 'summary12',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary12_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1nIoaZkAFq-bnVnl3c6wdFAbGF4SDtedSg4KnJx4EANc/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework12',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework12_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture13',
                name: 'Lecture 13',
                children: [
                  {
                    id: 'video13',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video13_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=K6OJ9OZAchQ&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=13',
                      },
                    ],
                  },
                  {
                    id: 'topics13',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic13_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=K6OJ9OZAchQ&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=14',
                      },
                      {
                        id: 'topic13_2',
                        name: '7:49 - Question 2',
                        url: 'https://www.youtube.com/watch?v=K6OJ9OZAchQ&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=14&t=469s',
                      },
                      {
                        id: 'topic13_3',
                        name: '31:19 - Question 3',
                        url: 'https://www.youtube.com/watch?v=K6OJ9OZAchQ&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=14&t=1879s',
                      },
                      {
                        id: 'topic13_4',
                        name: '56:34 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=K6OJ9OZAchQ&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=14&t=3394s',
                      },
                      {
                        id: 'topic13_5',
                        name: '58:34 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=K6OJ9OZAchQ&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=14&t=3514s',
                      }
                    ],
                  },
                  {
                    id: 'summary13',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary13_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1ceC7S1zngwl5wfbmwqtfvhxiKbc2GX_HeQ5tIkX-Tts/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework13',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework13_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1XV59e7J98jYdxbsI_JH5FkcEvKkuHvn9o_VmhsbnIIQ/edit?tab=t.0'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture14',
                name: 'Lecture 14',
                children: [
                  {
                    id: 'video14',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video14_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=CmOggHk1YGk&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=14',
                      },
                    ],
                  },
                  {
                    id: 'topics14',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic14_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=CmOggHk1YGk&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=15',
                      },
                      {
                        id: 'topic14_2',
                        name: '4:41 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=CmOggHk1YGk&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=15&t=281s',
                      },
                      {
                        id: 'topic14_3',
                        name: '11:12 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=CmOggHk1YGk&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=15&t=672s',
                      },
                      {
                        id: 'topic14_4',
                        name: '16:25 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=CmOggHk1YGk&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=15&t=985s',
                      },
                      {
                        id: 'topic14_5',
                        name: '22:23 - Concept',
                        url: 'https://www.youtube.com/watch?v=CmOggHk1YGk&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=15&t=1343s',
                      },
                      {
                        id: 'topic14_6',
                        name: '28:19 - Question 1',
                        url: 'https://www.youtube.com/watch?v=CmOggHk1YGk&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=15&t=1699s',
                      },
                      {
                        id: 'topic14_7',
                        name: '33:23 - Question 2',
                        url: 'https://www.youtube.com/watch?v=CmOggHk1YGk&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=15&t=2003s',
                      },
                      {
                        id: 'topic14_8',
                        name: '36:35 - Concept',
                        url: 'https://www.youtube.com/watch?v=CmOggHk1YGk&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=15&t=2195s',
                      },
                      {
                        id: 'topic14_9',
                        name: '44:08 - Question 3',
                        url: 'https://www.youtube.com/watch?v=CmOggHk1YGk&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=15&t=2648s',
                      },
                      {
                        id: 'topic14_10',
                        name: '50:16 - Concept',
                        url: 'https://www.youtube.com/watch?v=CmOggHk1YGk&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=15&t=3016s',
                      },
                      {
                        id: 'topic14_11',
                        name: '57:42 - Question 4',
                        url: 'https://www.youtube.com/watch?v=CmOggHk1YGk&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=15&t=3462s',
                      }
                    ],
                  },
                  {
                    id: 'summary14',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary14_content',
                        name: 'View Summary Document',
                        url: 'http://docs.google.com/document/d/1xEhDwncYutPAlB258QRHGSmL2m7FkxJfbvHe4-NKrow/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework14',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework14_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture15',
                name: 'Lecture 15',
                children: [
                  {
                    id: 'video15',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video15_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=p1IX6G-7yFA&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=15',
                      },
                    ],
                  },
                  {
                    id: 'topics15',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic15_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=p1IX6G-7yFA&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=16',
                      },
                      {
                        id: 'topic15_2',
                        name: '10:11 - Question 2',
                        url: 'https://www.youtube.com/watch?v=p1IX6G-7yFA&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=16&t=611s',
                      },
                      {
                        id: 'topic15_3',
                        name: '19:26 - Question 3',
                        url: 'https://www.youtube.com/watch?v=p1IX6G-7yFA&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=16&t=1166s',
                      },
                      {
                        id: 'topic15_4',
                        name: '30:18 - Question 4',
                        url: 'https://www.youtube.com/watch?v=p1IX6G-7yFA&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=16&t=1818s',
                      },
                      {
                        id: 'topic15_5',
                        name: '48:50 - Question 5',
                        url: 'https://www.youtube.com/watch?v=p1IX6G-7yFA&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=16&t=2930s',
                      }
                    ],
                  },
                  {
                    id: 'summary15',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary15_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/157RFGrxJphELXb2IleB_6sPNVsleQARRWt1wEybpblk/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework15',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework15_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture16',
                name: 'Lecture 16',
                children: [
                  {
                    id: 'video16',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video16_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=GrwqTqdVI8I&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=15',
                      },
                    ],
                  },
                  {
                    id: 'topics16',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic16_1',
                        name: '0:00 - Concept',
                        url: 'https://www.youtube.com/watch?v=GrwqTqdVI8I&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=16',
                      },
                      {
                        id: 'topic16_2',
                        name: '14:32 - Question 1',
                        url: 'https://www.youtube.com/watch?v=GrwqTqdVI8I&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=16&t=872s',
                      },
                      {
                        id: 'topic16_3',
                        name: '27:50 - Question 2',
                        url: 'https://www.youtube.com/watch?v=GrwqTqdVI8I&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=16&t=1670s',
                      },
                      {
                        id: 'topic16_4',
                        name: '37:20 - Question 3',
                        url: 'https://www.youtube.com/watch?v=GrwqTqdVI8I&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=16&t=2240s',
                      },
                      {
                        id: 'topic16_5',
                        name: '1:00:51 - Question 4',
                        url: 'https://www.youtube.com/watch?v=GrwqTqdVI8I&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=16&t=3651s',
                      }
                    ],
                  },
                  {
                    id: 'summary16',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary16_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1BJz2cpwLN7rprqSjalUabsyuMOqZR8x6euKnGu46QM8/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework16',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework16_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture17',
                name: 'Lecture 17',
                children: [
                  {
                    id: 'video17',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video17_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=uH_JngLAzYc&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=16',
                      },
                    ],
                  },
                  {
                    id: 'topics17',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic17_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=uH_JngLAzYc&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=17',
                      },
                      {
                        id: 'topic17_2',
                        name: '12:02 - Question 2',
                        url: 'https://www.youtube.com/watch?v=uH_JngLAzYc&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=17&t=722s',
                      },
                      {
                        id: 'topic17_3',
                        name: '40:08 - Question 3',
                        url: 'https://www.youtube.com/watch?v=uH_JngLAzYc&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=17&t=2408s',
                      },
                      {
                        id: 'topic17_4',
                        name: '50:41 - Question 4',
                        url: 'https://www.youtube.com/watch?v=uH_JngLAzYc&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=17&t=3041s',
                      }
                    ],
                  },
                  {
                    id: 'summary17',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary17_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1zxkWuN4I0BGy_xjj4PsU6h912UZWkOTGFVaBhwEf-W8/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework17',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework17_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture18',
                name: 'Lecture 18',
                children: [
                  {
                    id: 'video18',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video18_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=Hkc30v4rAkI&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=17',
                      },
                    ],
                  },
                  {
                    id: 'topics18',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic18_1',
                        name: '0:00 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=Hkc30v4rAkI&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=18',
                      },
                      {
                        id: 'topic18_2',
                        name: '8:28 - Question 1',
                        url: 'https://www.youtube.com/watch?v=Hkc30v4rAkI&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=18&t=508s',
                      },
                      {
                        id: 'topic18_3',
                        name: '26:31 - Question 2',
                        url: 'https://www.youtube.com/watch?v=Hkc30v4rAkI&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=18&t=1591s',
                      }
                    ],
                  },
                  {
                    id: 'summary18',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary18_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1jxOR310AoxrVD6YUtDmy1r5FdU71DYz_TldhePv8Nr4/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework18',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework18_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1ty4_aGCenFPGmxDszSnGtXJkDC3UtvshqkQ-jfYGAYU/edit?tab=t.0#heading=h.xxhw0trc2igg'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture19',
                name: 'Lecture 19',
                children: [
                  {
                    id: 'video19',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video19_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=FneLrAXgb4k&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=18',
                      },
                    ],
                  },
                  {
                    id: 'topics19',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic19_1',
                        name: '0:00 - Question 1',
                        url: 'https://www.youtube.com/watch?v=FneLrAXgb4k&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=19',
                      },
                      {
                        id: 'topic19_2',
                        name: '20:15 - Question 2',
                        url: 'https://www.youtube.com/watch?v=FneLrAXgb4k&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=19&t=1215s',
                      },
                      {
                        id: 'topic19_3',
                        name: '43:58 - Question 3',
                        url: 'https://www.youtube.com/watch?v=FneLrAXgb4k&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=19&t=2638s',
                      },
                      {
                        id: 'topic19_4',
                        name: '55:59 - Concept',
                        url: 'https://www.youtube.com/watch?v=FneLrAXgb4k&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=19&t=3359s',
                      },
                      {
                        id: 'topic19_5',
                        name: '1:01:48 - Question 4',
                        url: 'https://www.youtube.com/watch?v=FneLrAXgb4k&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=19&t=3708s',
                      }
                    ],
                  },
                  {
                    id: 'summary19',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary19_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1fuSC3B6za1cMiSKvpApHOV239MtEOG-TNcvo91tdhoA/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework19',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework19_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture20',
                name: 'Lecture 19',
                children: [
                  {
                    id: 'video20',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video20_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=_cpdZcXGpMI&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=20',
                      },
                    ],
                  },
                  {
                    id: 'topics20',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic20_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=_cpdZcXGpMI&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=21',
                      },
                      {
                        id: 'topic20_2',
                        name: '8:36 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=_cpdZcXGpMI&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=21&t=516s',
                      },
                      {
                        id: 'topic20_3',
                        name: '35:14 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=_cpdZcXGpMI&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=21&t=2114s',
                      },
                      {
                        id: 'topic20_4',
                        name: '38:49 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=_cpdZcXGpMI&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=21&t=2329s',
                      },
                      {
                        id: 'topic20_5',
                        name: '42:11 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=_cpdZcXGpMI&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=21&t=2531s',
                      },
                      {
                        id: 'topic20_6',
                        name: '48:58 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=_cpdZcXGpMI&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=21&t=2938s',
                      }
                    ],
                  },
                  {
                    id: 'summary20',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary20_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1Q4fCxLVMEAsftudVyYF8k5AXe1EwYEu8kOJ8vI2N4CE/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework20',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework20_content',
                        name: 'View Homework Document',
                        url: 'https://docs.google.com/document/d/1zmRVY2-ovPn3uKwhdtmhQM0pxg6VvcIfL_ckx44_G0g/edit?tab=t.0#heading=h.wcosatycfid3'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture21',
                name: 'Lecture 21',
                children: [
                  {
                    id: 'video21',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video21_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=ftrMrUgtjRI&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=21',
                      },
                    ],
                  },
                  {
                    id: 'topics21',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic21_1',
                        name: '0:00 - Homework Checking 1',
                        url: 'https://www.youtube.com/watch?v=ftrMrUgtjRI&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=22',
                      },
                      {
                        id: 'topic21_2',
                        name: '2:15 - Doubt 1 (From last class using short method)',
                        url: 'https://www.youtube.com/watch?v=ftrMrUgtjRI&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=22&t=135s',
                      },
                      {
                        id: 'topic21_3',
                        name: '8:51 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=ftrMrUgtjRI&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=22&t=531s',
                      },
                      {
                        id: 'topic21_4',
                        name: '35:31 - Homework Checking 2',
                        url: 'https://www.youtube.com/watch?v=ftrMrUgtjRI&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=22&t=2131s',
                      },
                      {
                        id: 'topic21_5',
                        name: '39:00 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=ftrMrUgtjRI&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=22&t=2340s',
                      },
                      {
                        id: 'topic21_6',
                        name: '47:01 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=ftrMrUgtjRI&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=22&t=2821s',
                      },
                      {
                        id: 'topic21_7',
                        name: '52:24 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=ftrMrUgtjRI&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=22&t=3144s',
                      }
                    ],
                  },
                  {
                    id: 'summary21',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary21_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1OhLWwhzKE3ETl6NeDgeTM3d239rWOBblkOV2HSdf6Os/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework21',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework21_content',
                        name: 'View Homework Document',
                        url: 'https://drive.google.com/file/d/196vzrq5n8BUKvJYdOkDuggmHutTPA-uG/view'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture22',
                name: 'Lecture 22',
                children: [
                  {
                    id: 'video22',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video22_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=p81I2GaZ2Vw&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=22',
                      },
                    ],
                  },
                  {
                    id: 'topics22',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic22_1',
                        name: '0:00 - Homework Checking',
                        url: 'https://www.youtube.com/watch?v=p81I2GaZ2Vw&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=23',
                      },
                      {
                        id: 'topic22_2',
                        name: '9:51 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=p81I2GaZ2Vw&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=23&t=591s',
                      },
                      {
                        id: 'topic22_3',
                        name: '11:47 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=p81I2GaZ2Vw&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=23&t=707s',
                      },
                      {
                        id: 'topic22_4',
                        name: '14:57 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=p81I2GaZ2Vw&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=23&t=897s',
                      },
                      {
                        id: 'topic22_5',
                        name: '17:09 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=p81I2GaZ2Vw&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=23&t=1029s',
                      },
                      {
                        id: 'topic22_6',
                        name: '21:25 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=p81I2GaZ2Vw&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=23&t=1285s',
                      },
                      {
                        id: 'topic22_7',
                        name: '25:21 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=p81I2GaZ2Vw&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=23&t=1521s',
                      },
                      {
                        id: 'topic22_8',
                        name: '31:00 - Doubt 7',
                        url: 'https://www.youtube.com/watch?v=p81I2GaZ2Vw&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=23&t=1860s',
                      },
                      {
                        id: 'topic22_9',
                        name: '34:24 - Doubt 8',
                        url: 'https://www.youtube.com/watch?v=p81I2GaZ2Vw&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=23&t=2064s',
                      },
                      {
                        id: 'topic22_10',
                        name: '39:06 - Doubt 9',
                        url: 'https://www.youtube.com/watch?v=p81I2GaZ2Vw&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=23&t=2346s',
                      },
                      {
                        id: 'topic22_11',
                        name: '45:04 - Doubt 10',
                        url: 'https://www.youtube.com/watch?v=p81I2GaZ2Vw&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=23&t=2704s',
                      },
                      {
                        id: 'topic22_12',
                        name: '50:41 - Doubt 11',
                        url: 'https://www.youtube.com/watch?v=p81I2GaZ2Vw&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=23&t=3041s',
                      },
                      {
                        id: 'topic22_13',
                        name: '52:04 - Doubt 12',
                        url: 'https://www.youtube.com/watch?v=p81I2GaZ2Vw&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=23&t=3124s',
                      },
                      {
                        id: 'topic22_14',
                        name: '56:51 - Doubt 13',
                        url: 'https://www.youtube.com/watch?v=p81I2GaZ2Vw&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=23&t=3411s',
                      },
                      {
                        id: 'topic22_15',
                        name: '1:01:03 - Doubt 14',
                        url: 'https://www.youtube.com/watch?v=p81I2GaZ2Vw&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=23&t=3663s',
                      },
                      {
                        id: 'topic22_16',
                        name: '1:04:40 - Doubt 15',
                        url: 'https://www.youtube.com/watch?v=p81I2GaZ2Vw&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=23&t=3880s',
                      },
                      {
                        id: 'topic22_17',
                        name: '1:07:11 - Ending(to be continued)',
                        url: 'https://www.youtube.com/watch?v=p81I2GaZ2Vw&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=23&t=4031s',
                      }
                    ],
                  },
                  {
                    id: 'summary22',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary22_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/11QIez0svQ4N1YYhPqS98SQOlO5Yd4ZNDIOSSANV-8Vg/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework22',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework22_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
             },
             {
                id: 'lecture23',
                name: 'Lecture 23',
                children: [
                  {
                    id: 'video23',
                    name: 'Full Video Link',
                    children: [
                      {
                        id: 'video23_content',
                        name: 'Watch Full Video',
                        url: 'https://www.youtube.com/watch?v=Kw6_oNgpts4&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=23',
                      },
                    ],
                  },
                  {
                    id: 'topics23',
                    name: 'Class Topics',
                    children: [
                      {
                        id: 'topic23_1',
                        name: '0:00 - Doubt 1',
                        url: 'https://www.youtube.com/watch?v=Kw6_oNgpts4&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=24',
                      },
                      {
                        id: 'topic23_2',
                        name: '18:53 - Doubt 2',
                        url: 'https://www.youtube.com/watch?v=Kw6_oNgpts4&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=24&t=1133s',
                      },
                      {
                        id: 'topic23_3',
                        name: '26:25 - Doubt 3',
                        url: 'https://www.youtube.com/watch?v=Kw6_oNgpts4&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=24&t=1585s',
                      },
                      {
                        id: 'topic23_4',
                        name: '35:35 - Doubt 4',
                        url: 'https://www.youtube.com/watch?v=Kw6_oNgpts4&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=24&t=2135s',
                      },
                      {
                        id: 'topic23_5',
                        name: '43:32 - Doubt 5',
                        url: 'https://www.youtube.com/watch?v=Kw6_oNgpts4&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=24&t=2612s',
                      },
                      {
                        id: 'topic23_6',
                        name: '53:36 - Doubt 6',
                        url: 'https://www.youtube.com/watch?v=Kw6_oNgpts4&list=PL1id2Mcm3077TFaM7ck-HwaEc5kVGDh_3&index=24&t=3216s',
                      }
                    ],
                  },
                  {
                    id: 'summary23',
                    name: 'Class Summary',
                    children: [
                      {
                        id: 'summary23_content',
                        name: 'View Summary Document',
                        url: 'https://docs.google.com/document/d/1O7UA1MMLpW71G2xKSDwOfwApGN2aS0VEJLw8yYP7gnQ/edit?tab=t.0',
                      },
                    ],
                  },
                  {
                    id: 'homework23',
                    name: 'Homework',
                    children: [
                      {
                        id: 'homework23_content',
                        name: 'No Homework was assigned'
                      },
                    ],
                  },
                ],
             }  
            ]
          }
        ]
      },
      {
        id: 'revision',
        name: 'Revision',
        children: [
          {
            id: 'lecture1',
            name: 'Lecture 1',
            children: [
              {
                id: 'video1',
                name: 'Full Video Link',
                children: [
                  {
                    id: 'video1_content',
                    name: 'Watch Full Video',
                    url: 'https://www.youtube.com/watch?v=3mJEkt_aKk0&list=PL1id2Mcm3076Bn6f8PnDVaEB3E0qHMe1g',
                  },
                ],
              },
              {
                id: 'topics1',
                name: 'Class Topics',
                children: [
                  {
                    id: 'topic1_1',
                    name: '0:00 - Homework Checking',
                    url: 'https://www.youtube.com/watch?v=3mJEkt_aKk0&list=PL1id2Mcm3076Bn6f8PnDVaEB3E0qHMe1g&index=2',
                  },
                  {
                    id: 'topic1_2',
                    name: '2:50 - Doubt 1',
                    url: 'https://www.youtube.com/watch?v=3mJEkt_aKk0&list=PL1id2Mcm3076Bn6f8PnDVaEB3E0qHMe1g&index=2&t=170s',
                  },
                  {
                    id: 'topic1_3',
                    name: '20:44 - Doubt 2',
                    url: 'https://www.youtube.com/watch?v=3mJEkt_aKk0&list=PL1id2Mcm3076Bn6f8PnDVaEB3E0qHMe1g&index=2&t=1244s',
                  },
                  {
                    id: 'topic1_4',
                    name: '24:48 - Doubt 3',
                    url: 'https://www.youtube.com/watch?v=3mJEkt_aKk0&list=PL1id2Mcm3076Bn6f8PnDVaEB3E0qHMe1g&index=2&t=1488s',
                  },
                  {
                    id: 'topic1_5',
                    name: '28:19 - Doubt 4',
                    url: 'https://www.youtube.com/watch?v=3mJEkt_aKk0&list=PL1id2Mcm3076Bn6f8PnDVaEB3E0qHMe1g&index=2&t=1699s',
                  },
                  {
                    id: 'topic1_6',
                    name: '32:36 - Doubt 5',
                    url: 'https://www.youtube.com/watch?v=3mJEkt_aKk0&list=PL1id2Mcm3076Bn6f8PnDVaEB3E0qHMe1g&index=2&t=1956s',
                  },
                  {
                    id: 'topic1_7',
                    name: '41:31 - Doubt 6',
                    url: 'https://www.youtube.com/watch?v=3mJEkt_aKk0&list=PL1id2Mcm3076Bn6f8PnDVaEB3E0qHMe1g&index=2&t=2491s',
                  },
                  {
                    id: 'topic1_8',
                    name: '45:17 - Doubt 7',
                    url: 'https://www.youtube.com/watch?v=3mJEkt_aKk0&list=PL1id2Mcm3076Bn6f8PnDVaEB3E0qHMe1g&index=2&t=2717s',
                  },
                  {
                    id: 'topic1_9',
                    name: '51:03 - Doubt 8',
                    url: 'https://www.youtube.com/watch?v=3mJEkt_aKk0&list=PL1id2Mcm3076Bn6f8PnDVaEB3E0qHMe1g&index=2&t=3063s',
                  },
                  {
                    id: 'topic1_10',
                    name: '1:00:25 - Doubt 9',
                    url: 'https://www.youtube.com/watch?v=3mJEkt_aKk0&list=PL1id2Mcm3076Bn6f8PnDVaEB3E0qHMe1g&index=2&t=3625s',
                  },
                  {
                    id: 'topic1_11',
                    name: '1:06:57 - Doubt 10',
                    url: 'https://www.youtube.com/watch?v=3mJEkt_aKk0&list=PL1id2Mcm3076Bn6f8PnDVaEB3E0qHMe1g&index=2&t=4017s',
                  }
                ],
              },
              {
                id: 'summary1',
                name: 'Class Summary',
                children: [
                  {
                    id: 'summary1_content',
                    name: 'View Summary Document',
                    url: 'https://docs.google.com/document/d/1QC1vkKr5eRrQi4zO2Dc7vGNMWuT7EYyVGlhVhmXmsCQ/edit?tab=t.0',
                  },
                ],
              },
              {
                id: 'homework1',
                name: 'Homework',
                children: [
                  {
                    id: 'homework1_content',
                    name: 'No Homework was assigned'
                  },
                ],
              },
            ],
          }
        ]
      }
    ],
  }
];

const TreeItem: React.FC<{ node: TreeNode; level?: number }> = ({ 
  node, 
  level = 0 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  // Calculate font size based on level
  const getFontSize = () => {
    switch(level) {
      case 1: return '26px';  // Class 
      case 2: return '24px';  // Topic
      case 3: return '22px';  // Sub-topic
      case 4: return '20px';  // Lectures
      case 5: return '18px';  // Full Video Link, Class Topics, etc.
      default: return '16px'; // Nested topics
    }
  };

  const toggleExpand = () => {
    if (hasChildren) setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ marginLeft: '1rem' }}>
      <div
        onClick={toggleExpand}
        style={{
          cursor: hasChildren || node.url ? 'pointer' : 'default',
          fontWeight: hasChildren ? 'bold' : 'normal',
          fontSize: getFontSize(),
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {hasChildren && (
          <span style={{ marginRight: '5px' }}>{isExpanded ? '▼' : '▶'}</span>
        )}
        {!hasChildren && (
          <span style={{ marginRight: '10px', fontSize: level > 5 ? '16px' : '14px' }}>•</span>
        )}

        {node.url ? (
          <a
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#090deeff', textDecoration: 'underline' }}
          >
            {node.name}
          </a>
        ) : (
          node.name
        )}
      </div>

      {isExpanded && hasChildren && (
        <div>
          {node.children?.map((child) => (
            <TreeItem key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeView: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '1rem',
      }}
    >
      <h1 style={{ fontSize: '32px', marginBottom: '1rem' }}>A Simple Teacher</h1>
      {treeData.map((node) => (
        <TreeItem key={node.id} node={node} level={1} />
      ))}
    </div>
  );
};

export default TreeView;

