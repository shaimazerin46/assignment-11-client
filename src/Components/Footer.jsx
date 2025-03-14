

const Footer = () => {
    return (
        <div>
            <footer className="flex bg-base-200 py-10">
  <aside className="mx-auto">
  <a className="text-xl font-bold">ServiceCritic</a>
  <p className="pt-2">&copy; 2025 ServiceCritic. All rights reserved.</p>
  </aside>
  <nav className="mx-auto ">
    <h6 className="text-xl font-bold pb-2">Services</h6>
    <div className="gap-2 flex">
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
    </div>
    
  </nav>
  <nav className="mx-auto ">
    <h6 className="text-xl font-bold pb-2">Social</h6>
    <div className="flex">
    <a href="https://www.facebook.com/shaimazerinrichi" target="_blank">
    <img className="w-10" src="https://img.icons8.com/?size=80&id=z657ovoGgS2o&format=png" alt=""/>
    </a>
    <a href="https://www.instagram.com/" target="_blank">
    <img className="w-10" src="https://img.icons8.com/?size=80&id=BrU2BBoRXiWq&format=png" alt=""/>
    </a>
    <a href="https://www.linkedin.com/in/shaima-zerin-23bb59204/" target="_blank">
    <img className="w-10" src="https://img.icons8.com/?size=80&id=kBCrQMzpQDLQ&format=png" alt=""/>
    </a>
    </div>

  </nav>
  <nav className="mx-auto">
    <h6 className="text-xl font-bold pb-2">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;