import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import SourceFile from './pages/SourceFile';
import SourceFile1 from './pages/SourceFile1';
import SourceFile2 from './pages/SourceFile2';
import SourceFile3 from './pages/SourceFile3';
import SourceFile4 from './pages/SourceFile4';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/SourceFile', element: <SourceFile /> },
{ path: '/SourceFile1', element: <SourceFile1 /> },
{ path: '/SourceFile2', element: <SourceFile2 /> },
{ path: '/SourceFile3', element: <SourceFile3 /> },
{ path: '/SourceFile4', element: <SourceFile4 /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}