// components/Sidebar.jsx
import { X, FileText, ShieldCheck, Headphones, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ isOpen, setOpen }) {
  const navigate = useNavigate();

  const menuItems = [
    { name: "HISTORY", path: "/history", icon: <FileText size={20}/> },
    { name: "ANALISIS", path: "/analysis", icon: <ShieldCheck size={20}/> },
    { name: "BANTUAN", path: "/help", icon: <Headphones size={20}/> },
  ];

  const handleNav = (path) => {
    navigate(path);
    setOpen(false); 
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <div className={`fixed top-0 left-0 h-full w-[250px] bg-[#345789] z-[70] transition-transform duration-300 lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-5 flex justify-between items-center border-b border-white/10">
          <span className="text-white font-bold">Menu</span>
          <button onClick={() => setOpen(false)} className="text-white"><X /></button>
        </div>

        <div className="flex flex-col p-4 gap-4 text-white font-semibold">
          {menuItems.map((item) => (
            <button 
              key={item.name}
              onClick={() => handleNav(item.path)}
              className="flex items-center gap-3 p-3 hover:bg-[#00B4E5] rounded-xl transition-all"
            >
              {item.icon}
              {item.name}
            </button>
          ))}
          
          <hr className="border-white/10 my-2" />
          
          <button className="flex items-center gap-3 p-3 text-red-300 hover:bg-red-500/20 rounded-xl">
            <LogOut size={20} />
            LOGOUT
          </button>
        </div>
      </div>
    </>
  );
}