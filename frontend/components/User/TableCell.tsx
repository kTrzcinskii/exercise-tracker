interface TableCellProps {
  title: string;
  content: string | number;
}

const TableCell: React.FC<TableCellProps> = ({ title, content }) => {
  return (
    <div className='flex flex-row mx-auto w-5/6 md:w-4/5 max-w-[500px] justify-between space-x-6 md:space-x-8 lg:space-x-12 overflow-hidden'>
      <p className='font-semibold lg:text-lg text-blue-800'>{title}</p>
      <p className='lg:text-lg text-slate-700 max-w-full break-all'>
        {content}
        {typeof content === "number" && " min"}
      </p>
    </div>
  );
};

export default TableCell;
