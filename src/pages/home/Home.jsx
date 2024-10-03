import Sidebar from "../../components/sidebar/sideBar";
import Navbar from "../../components/navbar/navbar";
import Widget from "../../components/widget/widget";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar className="" />
      <div className="homeContainer w-5/6">
        <Navbar />
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Home;
