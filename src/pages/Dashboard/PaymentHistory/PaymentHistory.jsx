import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle
        heading="payment history"
        subheading="my payment info"
      ></SectionTitle>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Price</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {payments.map((item, index) => (
              <tr key={item._id}>
                <th> {index + 1} </th>
                <td>{item.email}</td>
                <td>{item.price}</td>
                <td>{item.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
