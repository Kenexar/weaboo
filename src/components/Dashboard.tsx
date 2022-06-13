import DashboardButton from "./DashboardButton";

function Dashboard() {
    return (
        <div className="min-h-screen bg-base shrink-0">
            <div>
            </div>
            <div className="min-h-screen w-64 bg-secondary order-1 align-top ">
                <DashboardButton text="FirstButton" id1="peter" id2="hase"/>
                <DashboardButton text="SecondButton"id1="huso" id2="dsfdsfe"/>
            </div>
        </div>
    )
}

export default Dashboard;