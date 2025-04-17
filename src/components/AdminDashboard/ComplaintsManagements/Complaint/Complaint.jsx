import React, { useState, useEffect } from 'react'
import { FiSearch, FiSend } from 'react-icons/fi'

const users = [
  {
    image: "/profile1.jpeg",
    name: "Manisha Sharma",
    type: "Customer",
    message: "Hello, I need help regarding the listing I saw on your portal. Can someone assist me?"
  },
  {
    image: "/profile2.jpeg",
    name: "Harsh Yadav",
    type: "Agent",
    message: "Hi, I’m trying to post a property but facing a technical issue. Please resolve it ASAP."
  },
  {
    image: "/profile3.jpeg",
    name: "Rishabh Barman",
    type: "Builder",
    message: "We have multiple projects launching soon and need a premium feature package."
  },
]

const Complaint = () => {
  const [selectedUser, setSelectedUser] = useState(users[0])
  const [searchQuery, setSearchQuery] = useState('')
  const [message, setMessage] = useState('')

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.type.toLowerCase().includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    // Disable scrollbars for the entire page
    document.body.style.overflow = 'hidden';

    // Cleanup function to reset overflow when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden flex bg-white rounded-xl">

      {/* Left Side */}
      <div className="w-[26%] h-full flex flex-col border-r-2 border-[#00A58E] p-4 overflow-hidden">

        {/* Search Bar */}
        <div className="flex items-center bg-white text-gray-700 border border-[#E8EDF1] rounded-sm px-2 py-2">
          <FiSearch color='#00A58E' size={24} />
          <input
            type="text"
            placeholder="Search Here"
            className="outline-none w-full pl-1.5 text-l font-bold"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* User List */}
        <ul className="mt-4 flex-1 pr-1">
          {
            filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-4 px-2 py-2 rounded cursor-pointer transition-all duration-200 
                    ${selectedUser.name === user.name ? 'bg-[#e6f8f5]' : 'hover:bg-[#f0fdfa] hover:scale-[1.01]'}`}
                  onClick={() => setSelectedUser(user)}
                >
                  <img src={user.image} alt="profile" className='w-10 h-10 rounded-full' />
                  <div className='flex flex-col'>
                    <p className='text-lg font-[500]'>{user.name}</p>
                    <p className='text-sm font-[400] text-[#697D95]'>{user.type}</p>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-sm text-gray-500 mt-4 text-center">No users found</p>
            )
          }
        </ul>
      </div>

      {/* Right Side */}
      <div className="w-[74%] h-full flex flex-col">

        {/* Header */}
        <div className="flex items-center gap-4 px-4 py-3 border-b-2 border-[#00A58E]">
          <img src={selectedUser.image} alt="profile" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <p className="text-lg font-[500]">{selectedUser.name}</p>
            <p className="text-sm font-[400] text-[#697D95]">{selectedUser.type}</p>
          </div>
        </div>

        {/* Message + Input */}
        <div className="h-[calc(100%-4rem)] max-h-[560px] flex flex-col justify-between px-4 py-3 overflow-hidden">

          {/* Message area with reduced height */}
          <div className="flex gap-4 overflow-hidden max-h-[150px]">
            <img src={selectedUser.image} alt="profile" className="w-10 h-10 rounded-full" />
            <p className="max-w-[60%] bg-[#CCEDE8] p-4 rounded-sm text-[#5E6670] text-sm border border-[#7F8786]">
              {selectedUser.message}
            </p>
          </div>

          {/* Input area moved inside message area */}
          <div className="mt-4 flex items-center border border-gray-300 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Type Here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full text-sm outline-none"
            />
            <button className="ml-3 text-white bg-[#00A58E] p-2 rounded-full">
              <FiSend size={18} />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Complaint
