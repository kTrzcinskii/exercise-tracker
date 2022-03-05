import { ILog } from "../../lib/IUser";
import SingleLog from "./SingleLog";

interface UserLogsProps {
  logs: ILog[];
}

const UserLogs: React.FC<UserLogsProps> = ({ logs }) => {
  if (logs.length === 0) {
    return (
      <div className='mt-6 md:mt-10 lg:mt-14 mx-auto'>
        <h3 className='text-gray-800 text-lg md:text-xl lg:text-2xl text-center'>
          There aren&apos;t any activities added yet.
        </h3>
      </div>
    );
  }

  return (
    <>
      <div className='my-2 md:my-4 lg:my-6'>
        <h4 className='text-gray-800 text-lg md:text-xl lg:text-2xl text-center'>
          Your activities:
        </h4>
      </div>
      <div className='mx-auto max-w-[800px] w-4/5 space-y-2 md:space-y-4 lg:space-y-6'>
        {logs.map((log, index) => {
          return <SingleLog log={log} key={index} />;
        })}
      </div>
      ;
    </>
  );
};

export default UserLogs;
