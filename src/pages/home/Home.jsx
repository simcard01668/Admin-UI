import Sidebar from "../../components/sidebar/sideBar";
import Navbar from "../../components/navbar/navbar";
import Widget from "../../components/widget/widget";
import Chart from "../../components/chart/chart";
import Feature from "../../components/feature/feature";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar className="" />
      <div className="homeContainer w-5/6">
        <Navbar />
        <div className="widgets flex gap-[15px] m-[15px]">
          <Widget type='user'/>
          <Widget type='order'/>
          <Widget type='earning'/>
          <Widget type='balance'/>
        </div>
        <div className="charts flex gap-[20px] py-[5px] px-[20px]">
          <Feature />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
