import Sidebar from "../../components/sidebar/sideBar";
import Navbar from "../../components/navbar/navbar";
import Widget from "../../components/widget/widget";
import Chart from "../../components/chart/chart";
import Feature from "../../components/feature/feature";
import List from "../../components/list/list";

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
          <Chart customHeight={417} aspect={2/1} title={"Income statistic"}/>
        </div>
        <div className="listContainer m-[10px] p-[20px]">
          <div className="listTitle text-[20px] font-medium text-gray-500 flex flex-col items-center">
            Latest Transaction
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
