"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const addTask = () => {
    const [task, setTask] = useState({ title: "", body: "" });
    const [disable, setDisabled] = useState(false);

    useEffect(() => {
        if (task.title.length > 0 && task.body.length > 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    });

    const onAddTask = () => {
        // const response = await axios.post("/api/addTask", task);
        console.log(task);
    };

    return (
        <div>
            <div className="flex flex-col justify-center items-center min-h-screen text-lg ">
                <h1 className="font-semibold">Task!</h1>
                <hr />
                <div className="flex flex-col w-1/4">
                    <label htmlFor="title" className="pl-2 mt-2">
                        title
                    </label>
                    <input
                        className="rounded-lg p-1 pl-2 m-1"
                        type="title"
                        name="title"
                        placeholder="title"
                        value={task.title}
                        onChange={(e) => {
                            setTask({ ...task, title: e.target.value });
                        }}
                    />
                    <label htmlFor="body" className="pl-2 mt-2">
                        body
                    </label>
                    <textarea
                        rows={4}
                        className="rounded-lg p-1 pl-2 m-1"
                        type="body"
                        name="body"
                        placeholder="body"
                        value={task.body}
                        onChange={(e) => {
                            setTask({ ...task, body: e.target.value });
                        }}
                    />
                </div>
                <button
                    type="submit"
                    onClick={onAddTask}
                    className="mt-2 px-3 py-1 bg-white rounded-lg text-black font-semibold"
                >
                    {disable ? "No AddTask" : "AddTask"}
                </button>
            </div>
        </div>
    );
};

export default addTask;