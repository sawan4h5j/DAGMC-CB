
import PageTitle from "../../components/PageTitle";
import PanelMembers from "../../components/PanelMembers";




const Panel = () => {
  return (
    <>
    <PageTitle title="Panel Member"/>
      <img className=" mt-10 w-full" src="https://capsule-render.vercel.app/api?type=waving&height=300&color=gradient&text=Panel%20Member&section=header&reversal=false&fontAlignY=50&animation=twinkling&strokeWidth=0&fontSize=33" />
        
        <PanelMembers/>
     


      
    </>
  );
};

export default Panel;



