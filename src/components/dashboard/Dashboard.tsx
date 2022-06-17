import DashboardButton from "./DashboardButton";

function Dashboard() {
    return (
        <div>
            <header className="bg-red">
                <h1>Kenexar</h1>
            </header>
            <div className="flex">
                <aside className=" md:max-w-xs max-w-[12rem] h-screen bg-secondary columns-xs ">
                    <div className="flex flex-col box-border h-full">
                        <ul className="min-h-0 flex-1 overflow-auto">
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
        </div>

    );
}

export default Dashboard;