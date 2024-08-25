import { createBrowserRouter, Navigate } from "react-router-dom";
import Anouncements from "../pages/Anouncements";
import NotiFication from "../pages/NotiFication";
import Schedule from "../pages/Schedule";
import NotFoundPage from "../pages/404/NotFoundPage";
import BaseLayots from "../Layout/BaseLayots";
import Material from "../pages/headerBar/Material";
import Courses from "../pages/Courses";
import Students from "../pages/headerBar/Students";
import Raitings from "../pages/headerBar/Raitings";
import StudentInfo from "../pages/StudentInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayots />,
    children: [
      { index: true, element: <Navigate to="courses/material" replace /> },
      {
        path: "courses",
        element: <Courses />,
        children: [
          { index: true, element: <Navigate to="material" replace /> },
          { path: "material", element: <Material /> },
          {
            path: "students",
            children: [
              {index: true , element: <Students/>},
              {
                path: ":id/details",
                element: <StudentInfo/>
              }
            ]
          },

          { path: "ratings", element: <Raitings /> },
        ],
      },
      { path: "anouncements", element: <Anouncements /> },
      { path: "notification", element: <NotiFication /> },
      { path: "schedule", element: <Schedule /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
