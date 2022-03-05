import { ILog } from "../../lib/IUser";
import TableCell from "./TableCell";

interface SingleLogProps {
  log: ILog;
}

const SingleLog: React.FC<SingleLogProps> = ({ log }) => {
  return (
    <div className='flex flex-col justify-between items-start rounded-md border-2 border-blue-800 hover:scale-105 lg:hover:scale-110 transition-all duration-150 ease-in-out space-y-1 md:space-y-2 lg:space-y-3 py-1 md:py-2 lg:py-4'>
      <TableCell title='Description' content={log.description} />
      <TableCell title='Duration' content={log.duration} />
      <TableCell title='Date' content={log.date} />
    </div>
  );
};

export default SingleLog;
