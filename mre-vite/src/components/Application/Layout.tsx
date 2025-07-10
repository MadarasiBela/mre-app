import MreApp from './MreApp';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <MreApp /> {/* This contains your Burger menu and maybe other layout */}
      <Outlet />
    </>
  );
}