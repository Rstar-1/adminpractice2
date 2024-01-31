import React from "react";
import ReactPaginate from "react-paginate";
import FeatherIcon from "feather-icons-react";

const Dashboard = () => {
  return (
    <div className="mtpx9 prpx10 plpx10 ptpx50 pbpx20 cust-scroll bgwhite dashboard">
      <div className="grid-cols-4 gap-12">
        <div className="h-dash d-shadow relative">
          <div className="p15 flex justify-end">
            <div>
              <h2 className="fsize29 text-right mtpx1 mbpx1 textprimary">
                1000 +
              </h2>
              <p className="fsize12 text-right mtpx1 mbpx1 textgray">
                Collection of Porfolio
              </p>
            </div>
          </div>
          <div className="margin-minus mlpx15 absolute top-0 left-0">
            <div className="bgprimary dash-social flex justify-center items-center rounded-10">
              <FeatherIcon icon="folder" size="40" className="textwhite" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <div className="p12 flex justify-between bordt items-center">
              <div className="flex items-center gap-6">
                <FeatherIcon icon="bar-chart" size="17" className="textforth" />
                <p className="textforth font-500 fsize14">Portfolio</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-dash d-shadow relative">
          <div className="p15 flex justify-end">
            <div>
              <h2 className="fsize29 text-right mtpx1 mbpx1 textsecondary">
                10 +
              </h2>
              <p className="fsize12 text-right mtpx1 mbpx1 textgray">
                Enquiry Members
              </p>
            </div>
          </div>
          <div className="margin-minus mlpx15 absolute top-0 left-0">
            <div className="bgsecondary dash-social flex justify-center items-center rounded-10">
              <FeatherIcon icon="users" size="40" className="textwhite" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <div className="p12 flex justify-between bordt items-center">
              <div className="flex items-center gap-6">
                <FeatherIcon icon="bar-chart" size="17" className="textforth" />
                <p className="textforth font-500 fsize14">Connect with us</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-dash d-shadow relative">
          <div className="p15 flex justify-end">
            <div>
              <h2 className="fsize29 text-right mtpx1 mbpx1 textwarning">
                30 +
              </h2>
              <p className="fsize12 text-right mtpx1 mbpx1 textgray">
                Review of People
              </p>
            </div>
          </div>
          <div className="margin-minus mlpx15 absolute top-0 left-0">
            <div className="bgwarning dash-social flex justify-center items-center rounded-10">
              <FeatherIcon icon="star" size="40" className="textwhite" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <div className="p12 flex justify-between bordt items-center">
              <div className="flex items-center gap-6">
                <FeatherIcon icon="bar-chart" size="17" className="textforth" />
                <p className="textforth font-500 fsize14">Testimonials</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-dash d-shadow relative">
          <div className="p15 flex justify-end">
            <div>
              <h2 className="fsize29 text-right mtpx1 mbpx1 textsuccess">
                6
              </h2>
              <p className="fsize12 text-right mtpx1 mbpx1 textgray">
                Services
              </p>
            </div>
          </div>
          <div className="margin-minus mlpx15 absolute top-0 left-0">
            <div className="bgsuccess dash-social flex justify-center items-center rounded-10">
              <FeatherIcon icon="settings" size="40" className="textwhite" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <div className="p12 flex justify-between bordt items-center">
              <div className="flex items-center gap-6">
                <FeatherIcon icon="bar-chart" size="17" className="textforth" />
                <p className="textforth font-500 fsize14">Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mtpx25 mbpx15 flex gap-12 items-center">
        <div className="w-60">
          <div className="relative">
            <input
              className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
              placeholder="Search"
            />
            <div className="absolute top-0 right-0 mtpx9 mrpx2">
              <FeatherIcon
                icon="search"
                className="textgray cursor-pointer"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th className="fsize13 textforth w-20 font-300">
              <p>First Name</p>
            </th>
            <th className="fsize13 textforth w-20 font-300">
              <p>Last Name</p>
            </th>
            <th className="fsize13 textforth w-20 font-300">
              <p>Email</p>
            </th>
            <th className="fsize13 textforth w-20 font-300">
              <p>Phone</p>
            </th>
            <th className="fsize13 textforth w-20 font-300">
              <p>Message</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
          <tr>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>name</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>Email</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>mobile</p>
            </td>
            <td className="fsize13 textgray w-20 font-300">
              <p>message</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex w-full justify-end">
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          pageCount={4}
          pageRangeDisplayed={4}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default Dashboard;
