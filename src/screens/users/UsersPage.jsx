import AreaTableAction from "../../components/dashboard/areaTable/AreaTableAction";
import "../../components/dashboard/areaTable/AreaTable.scss"
import { MdOutlineMenu } from "react-icons/md";
import '../profile/ProfilePage.scss';

const TABLE_HEADS = [
  "Name",
  "Order ID",
  "Date",
  "Customer name",
  "Status",
  "Amount",
  "Action",
];

const TABLE_DATA = [
  {
    id: 100,
    name: "Iphone 13 Pro",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "delivered",
    amount: 400,
  },
  {
    id: 101,
    name: "Macbook Pro",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "pending",
    amount: 288,
  },
  {
    id: 102,
    name: "Apple Watch",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "canceled",
    amount: 500,
  },
  {
    id: 103,
    name: "Microsoft Book",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "delivered",
    amount: 100,
  },
  {
    id: 104,
    name: "Apple Pen",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "delivered",
    amount: 60,
  },
  {
    id: 105,
    name: "Airpods",
    order_id: 11232,
    date: "Jun 29,2022",
    customer: "Afaq Karim",
    status: "delivered",
    amount: 80,
  },
];

const UsersPage = () => {
  return (
    <div>
      <button
        className="sidebar-open-btn"
        type="button"
        onClick={() => dispatch({ type: "SIDEBAR_OPEN", payload: true })}
      >
        <MdOutlineMenu size={24} />
      </button>
      <h1 className="area-top-title">Users</h1>
      <section className="content-area-table">
        {/* <div className="data-table-info">
          <h4 className="data-table-title">Users</h4>
        </div> */}
        <div className="data-table-diagram">
          <table>
            <thead>
              <tr>
                {TABLE_HEADS?.map((th, index) => (
                  <th key={index}>{th}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA?.map((dataItem) => {
                return (
                  <tr key={dataItem.id}>
                    <td>{dataItem.name}</td>
                    <td>{dataItem.order_id}</td>
                    <td>{dataItem.date}</td>
                    <td>{dataItem.customer}</td>
                    <td>
                      <div className="dt-status">
                        <span
                          className={`dt-status-dot dot-${dataItem.status}`}
                        ></span>
                        <span className="dt-status-text">{dataItem.status}</span>
                      </div>
                    </td>
                    <td>${dataItem.amount.toFixed(2)}</td>
                    <td className="dt-cell-action">
                      <AreaTableAction />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default UsersPage;
