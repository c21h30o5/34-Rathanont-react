import { useState } from 'react';
import ViewToggleButton from '../components/ViewToggleButton';
import UserHomeView from './UserHomeView';
import AdminHomeView from './AdminHomeView';

export default function Home() {
    const [view, setView] = useState("");

    return (
        <div className="flex flex-col items-center pt-24 min-h-screen bg-gray-100">
            <h1 className="text-center text-6xl font-semibold mb-16 text-gray-800">
                Generation Thailand <br />
                {view === "user" && "Home - User View"}
                {view === "admin" && "Home - Admin View"}
                {view === "" && "React - Assessment"}
            </h1>

            <div className="flex gap-x-6 mb-12">
                <ViewToggleButton
                    onClick={() => {
                        setView("user");
                    }}
                >
                    User Home View
                </ViewToggleButton>

                <ViewToggleButton
                    onClick={() => {
                        setView("admin");
                    }}
                >
                    Admin Home View
                </ViewToggleButton>
            </div>

            {view === "user" && <UserHomeView />}
            {view === "admin" && <AdminHomeView />}

        </div>
    )
}