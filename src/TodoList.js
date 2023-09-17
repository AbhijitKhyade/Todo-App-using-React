import React from 'react'

export default function TodoList({ list, remove }) {
    return (
        <>
            {list?.length > 0 ? (
                <div className='container'>
                    <ul className='todo-list'>
                    {list.map((entry, index) => (
                        <div className='todo'>
                            <li key={index}>{entry}</li>
                            <button className='delete-button' onClick={() => {
                                remove(entry);
                            }}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </ul>
                </div>
            ) : (
                <div className='empty'>
                    <p>No task found</p>
                </div>
            )}
        </>
    );
};
