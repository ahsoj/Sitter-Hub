'use client';
import { useState, useTransition } from 'react';
import ChatListBar from './sidebar';
import { BiSearchAlt } from 'react-icons/bi';
import { RiUserSearchLine } from 'react-icons/ri';
import Form, { Field } from 'rc-field-form';
import { twmesh } from '@/utils/twmesh';
import { CiLocationOn } from 'react-icons/ci';
import { IoIosSend } from 'react-icons/io';
import ChatBox from './chatbox';

interface ChatLayoutProps {
  visibility: boolean;
  sendMessage: (message: string) => void;
}

const demo_chat = [
  {
    from: 'parent',
    message:
      'Hi, I’m looking for a sitter for my two kids, ages 6 and 9, for next Saturday from 6 pm to 10 pm. Are you available and interested?',
  },
  {
    from: 'sitter',
    message:
      'Hi, yes, I’m available and interested. I have experience with kids of that age group and I can provide references if needed',
  },
  {
    from: 'parent',
    message:
      'Great, thank you. Can you please send me your proposal with your rates and services? ',
  },
  {
    from: 'sitter',
    message:
      'Sure, I’ll send it to you shortly. Do you have any special requests or preferences for the kids? ',
  },
  {
    from: 'parent',
    message:
      'Well, they are pretty easy-going, but they do have some allergies and bedtime routines that I’ll share with you later. Also, I prefer that you don’t use your phone or watch TV while you’re with them, unless it’s an emergency or for educational purposes',
  },
  {
    from: 'sitter',
    message:
      'OK, I understand. I’ll keep that in mind when I write my proposal. I’ll get back to you soon. ',
  },
  {
    from: 'parent',
    message: 'Thank you, I appreciate it.',
  },
  {
    from: 'sitter',
    message:
      'Hi, I’ve sent you my proposal via email. Please let me know if you have any questions or concerns.',
  },
  {
    from: 'parent',
    message:
      'Hi, thank you for your proposal. It looks good, but I have a few questions. First, why did you charge $15 per hour? That seems a bit high compared to the average rate in our area. ',
  },
  {
    from: 'sitter',
    message:
      'Well, I based my rate on my qualifications, experience, and the services I offer. I have a CPR certification, a background check, and a clean driving record. I also have more than five years of experience as a sitter and a nanny, and I’ve worked with kids of different ages and needs. I can also help with homework, chores, and activities. I think my rate is fair and competitive for the value I provide. ',
  },
  {
    from: 'parent',
    message:
      'OK, I see your point. But can you lower it a bit? Maybe $12 per hour? ',
  },
  {
    from: 'sitter',
    message:
      'Hmm, that’s a bit low for me. How about $13 per hour? That’s the lowest I can go without compromising the quality of my service. ',
  },
  {
    from: 'parent',
    message:
      ' OK, let’s compromise on $13 per hour then. But can you also include a meal for yourself in that price? I don’t want to worry about feeding you while you’re here. ',
  },
  {
    from: 'sitter',
    message:
      'Sure, that’s fine. As long as it’s something simple and easy to prepare. ',
  },
  {
    from: 'parent',
    message:
      'OK, deal. Thank you for being flexible and understanding. I’m happy to hire you as our sitter for next Saturday. ',
  },
  {
    from: 'sitter',
    message:
      'Thank you for choosing me as your sitter. I’m looking forward to meeting you and your kids.',
  },
];

const ChatLayout = ({ visibility, sendMessage }: ChatLayoutProps) => {
  const [chatlistVisibility, setChatListVisibility] = useState<boolean>(false);
  const [isPending, startTransition] = useState<boolean>(false);
  const [chatMessage, setChatMessage] = useState<string>('');

  const handleChatlistVisibility = () => {
    setChatListVisibility(!chatlistVisibility);
  };

  const handleChatInputChange = (
    ev: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    startTransition(ev.target.value.length >= 2);
    setChatMessage(ev.target.value);
  };

  return (
    <>
      <ChatListBar
        chatlistVisibilityHandler={handleChatlistVisibility}
        chatlistVisibility={chatlistVisibility}
      />
      <div className="grow bg-white">
        <div className="p-3">
          <div className="flex items-center border rounded-3xl px-3 gap-x-2 grow">
            <button
              type="button"
              className="inline-flex sm:hidden justify-center items-center font-semibold transition-all"
            >
              <RiUserSearchLine
                onClick={handleChatlistVisibility}
                fontSize={25}
              />
            </button>
            <input
              type="text"
              className="p-2 block w-full grow outline-none text-base focus:border-blue-500 focus:ring-blue-500"
              placeholder="Input text"
            />
            <button
              type="button"
              className="inline-flex justify-center items-center font-semibold transition-all"
            >
              <BiSearchAlt fontSize={25} />
            </button>
          </div>
        </div>
        <ChatBox conversation={demo_chat} isTyping={isPending} />
        <Form
          onFinish={(values) => {
            sendMessage(values.raw_message);
          }}
          className="px-2 sticky bottom-0"
        >
          <div className="relative border border-slate-300 rounded-lg">
            <Field name="raw_message">
              <textarea
                className="p-4 pb-12 block w-full outline-none border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                name="raw_message"
                onChange={handleChatInputChange}
                placeholder="Ask me anything..."
              ></textarea>
            </Field>

            <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white">
              <div className="flex justify-between items-center">
                <div className="flex items-center" />

                <div className="flex items-center gap-x-1">
                  <button
                    type="button"
                    className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <CiLocationOn fontSize={22} />
                  </button>
                  <button
                    type="submit"
                    className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <IoIosSend fontSize={22} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ChatLayout;
