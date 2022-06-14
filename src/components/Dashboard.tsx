import DashboardButton from "./DashboardButton";
import Login from "./Login";


function Dashboard() {


    
    return (
        <div className="flex">
            <aside className=" md:max-w-xs max-w-[12rem] h-screen bg-secondary columns-xs border-solid border-r-[1px] border-gray-500">
                <div className="md border-solid border-b-[1px] border-gray-500 py-3 mx-6 mb">
                    <h1 className="text-white font-bold text-3xl text-left m-1 ml-3">KenexarEU</h1>
                </div>
                <div className="flex flex-col box-border h-full">
                    <ul className="min-h-0 flex-1 overflow-auto ">
                        <li className="">
                            <DashboardButton text="Game Server" id1="test" id2="test2"/>
                            <DashboardButton text="Docker" id1="test333" id2="t33est2"/>
                            <DashboardButton text="E-Mail Server" id1="te342324st" id2="t324est2"/>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className="bg-base flex-auto">
                <h1 className="text-white font-bold text-3xl m-6 overflow-y-hidde text-center">Willkommen!</h1>
            </div>
        

        </div>
    );
}

export default Dashboard;