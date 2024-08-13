import { useState } from 'react'

import './App.css'

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function App() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  return (
    <>
      <div class="admin-page">
    <img class="rectangle-51" src="../assets/vectors/rectangle_52_x2.svg" />
    <img class="rectangle-52" src="../assets/vectors/rectangle_51_x2.svg" />
    <div class="container-3">
      <div class="untitled-11">
      </div>
      <div class="container-20">
        <div class="admin-dashboard">
          ADMIN DASHBOARD
        </div>
        <div class="container-9">
          <img class="vector-1" src="../assets/vectors/vector_37_x2.svg" />
        </div>
      </div>
    </div>
    <div class="container-43">
      <div class="container-47">
        <div class="container-45">
          <span class="room-status">
            ROOM STATUS
          </span>
        </div>
        <div class="group-31">
          <div class="container-55">
            <span class="container-11">
              405
            </span>
          </div>
          <div class="container-33">
            <span class="container-10">
              406
            </span>
          </div>
        </div>
        <div class="group-32">
          <div class="container-48">
            <span class="container-13">
              405
            </span>
          </div>
          <div class="container-25">
            <span class="container-12">
              406
            </span>
          </div>
        </div>
        <div class="group-33">
          <div class="container-40">
            <span class="container-15">
              405
            </span>
          </div>
          <div class="container-11">
            <span class="container-14">
              406
            </span>
          </div>
        </div>
        <div class="group-34">
          <div class="container-42">
            <span class="container-17">
              405
            </span>
          </div>
          <div class="container-18">
            <span class="container-16">
              406
            </span>
          </div>
        </div>
        <div class="group-35">
          <div class="container-27">
            <span class="container-19">
              405
            </span>
          </div>
          <div class="container-35">
            <span class="container-18">
              406
            </span>
          </div>
        </div>
        <div class="group-36">
          <div class="container-38">
            <span class="container-21">
              405
            </span>
          </div>
          <div class="container-19">
            <span class="container-20">
              406
            </span>
          </div>
        </div>
        <div class="group-37">
          <div class="container">
            <span class="container-23">
              405
            </span>
          </div>
          <div class="container-37">
            <span class="container-22">
              406
            </span>
          </div>
        </div>
        <div class="group-38">
          <div class="container-26">
            <span class="container-25">
              405
            </span>
          </div>
          <div class="container-4">
            <span class="container-24">
              406
            </span>
          </div>
        </div>
        <div class="group-39">
          <div class="container-41">
            <span class="container-27">
              405
            </span>
          </div>
          <div class="container-36">
            <span class="container-26">
              406
            </span>
          </div>
        </div>
      </div>
      <div class="group-40">
        <div class="container-8">
          <span class="customer-details">
            CUSTOMER DETAILS
          </span>
        </div>
        <div class="container-24">
          <span class="name">
            Name
          </span>
          <span class="gender">
            Gender
          </span>
          <span class="check-in">
            Check In
          </span>
          <span class="check-out">
            Check out
          </span>
          <div class="container-52">
            <span class="room-no">
              Room No.
            </span>
            <span class="room-type">
              Room type
            </span>
          </div>
        </div>
        <div class="line-4">
        </div>
        <div class="container-13">
          <div class="john-doe">
            John Doe
          </div>
          <div class="m">
            M
          </div>
          <div class="container-46">
            <span class="am">
              09/08/2024<br />
              10:00 am
            </span>
            <span class="pm">
              09/08/2024<br />
              10:00 pm
            </span>
          </div>
          <div class="container">
            405
          </div>
          <div class="bed">
            8 Bed
          </div>
        </div>
        <div class="line-5">
        </div>
        <div class="container-23">
          <div class="john-doe-1">
            John Doe
          </div>
          <div class="m-1">
            M
          </div>
          <div class="container-14">
            <span class="am-1">
              09/08/2024<br />
              10:00 am
            </span>
            <span class="pm-1">
              09/08/2024<br />
              10:00 pm
            </span>
          </div>
          <div class="container-1">
            405
          </div>
          <div class="bed-1">
            8 Bed
          </div>
        </div>
        <div class="line-6">
        </div>
        <div class="container-12">
          <div class="john-doe-2">
            John Doe
          </div>
          <div class="m-2">
            M
          </div>
          <div class="container-50">
            <span class="am-2">
              09/08/2024<br />
              10:00 am
            </span>
            <span class="pm-2">
              09/08/2024<br />
              10:00 pm
            </span>
          </div>
          <div class="container-2">
            405
          </div>
          <div class="bed-2">
            8 Bed
          </div>
        </div>
        <div class="line-7">
        </div>
        <div class="container-54">
          <div class="john-doe-3">
            John Doe
          </div>
          <div class="m-3">
            M
          </div>
          <div class="container-1">
            <span class="am-3">
              09/08/2024<br />
              10:00 am
            </span>
            <span class="pm-3">
              09/08/2024<br />
              10:00 pm
            </span>
          </div>
          <div class="container-3">
            405
          </div>
          <div class="bed-3">
            8 Bed
          </div>
        </div>
        <div class="line-8">
        </div>
        <div class="container-30">
          <div class="john-doe-4">
            John Doe
          </div>
          <div class="m-4">
            M
          </div>
          <div class="container-39">
            <span class="am-4">
              09/08/2024<br />
              10:00 am
            </span>
            <span class="pm-4">
              09/08/2024<br />
              10:00 pm
            </span>
          </div>
          <div class="container-4">
            405
          </div>
          <div class="bed-4">
            8 Bed
          </div>
        </div>
        <div class="line-9">
        </div>
        <div class="container-32">
          <div class="john-doe-5">
            John Doe
          </div>
          <div class="m-5">
            M
          </div>
          <div class="container-31">
            <span class="am-5">
              09/08/2024<br />
              10:00 am
            </span>
            <span class="pm-5">
              09/08/2024<br />
              10:00 pm
            </span>
          </div>
          <div class="container-5">
            405
          </div>
          <div class="bed-5">
            8 Bed
          </div>
        </div>
        <div class="line-10">
        </div>
        <div class="container-28">
          <div class="john-doe-6">
            John Doe
          </div>
          <div class="m-6">
            M
          </div>
          <div class="container-29">
            <span class="am-6">
              09/08/2024<br />
              10:00 am
            </span>
            <span class="pm-6">
              09/08/2024<br />
              10:00 pm
            </span>
          </div>
          <div class="container-6">
            405
          </div>
          <div class="bed-6">
            8 Bed
          </div>
        </div>
        <div class="line-11">
        </div>
        <div class="container-10">
          <div class="john-doe-7">
            John Doe
          </div>
          <div class="m-7">
            M
          </div>
          <div class="container-5">
            <span class="am-7">
              09/08/2024<br />
              10:00 am
            </span>
            <span class="pm-7">
              09/08/2024<br />
              10:00 pm
            </span>
          </div>
          <div class="container-7">
            405
          </div>
          <div class="bed-7">
            8 Bed
          </div>
        </div>
        <div class="line-12">
        </div>
        <div class="container-17">
          <div class="john-doe-8">
            John Doe
          </div>
          <div class="m-8">
            M
          </div>
          <div class="container-7">
            <span class="am-8">
              09/08/2024<br />
              10:00 am
            </span>
            <span class="pm-8">
              09/08/2024<br />
              10:00 pm
            </span>
          </div>
          <div class="container-8">
            405
          </div>
          <div class="bed-8">
            8 Bed
          </div>
        </div>
        <div class="line-13">
        </div>
        <div class="container-16">
          <div class="john-doe-9">
            John Doe
          </div>
          <div class="m-9">
            M
          </div>
          <div class="container-51">
            <span class="am-9">
              09/08/2024<br />
              10:00 am
            </span>
            <span class="pm-9">
              09/08/2024<br />
              10:00 pm
            </span>
          </div>
          <div class="container-9">
            405
          </div>
          <div class="bed-9">
            8 Bed
          </div>
        </div>
        <div class="line-14">
        </div>
      </div>
      <div class="container-21">
        <div class="container-22">
          <span class="booking">
            BOOKING
          </span>
        </div>
        <div class="group-7">
          <div class="full-name">
            Full Name
          </div>
          <div class="group-15">
            <div class="group-8">
              <div class="container-44">
                <div class="gender-1">
                  Gender
                </div>
                <img class="rectangle-42" src="nerd\src\Rectangle42_x2.svg" />
              </div>
              <div class="group-1">
                <img class="vector-2" src="../assets/vectors/vector_25_x2.svg" />
              </div>
            </div>
            <div class="group-9">
              <div class="phone-number">
                Phone Number
              </div>
              <div class="container-34">
                <div class="container-53">
                  <img class="rectangle-4" src="../assets/vectors/rectangle_414_x2.svg" />
                  <img class="rectangle-43" src="../assets/vectors/rectangle_48_x2.svg" />
                </div>
                <div class="group">
                  <img class="vector" src="../assets/vectors/vector_26_x2.svg" />
                </div>
              </div>
            </div>
          </div>
          <div class="container-6">
            <div class="container-2">
              <div class="country">
                Country
              </div>
              <img class="rectangle-5" src="nerd\src\Rectangle5_x2.svg" />
            </div>
            <div class="group-10">
              <div class="room-type-1">
                Room Type
              </div>
            </div>
          </div>
        </div>
        <div class="group-17">
          <div class="container-49">
            <div class="check-in-1">
              Check In
            </div>
            <div class="group-16">
              <div class="group-91">
                <img class="rectangle-45" src="../assets/vectors/rectangle_415_x2.svg" />
                <span class="dd-mm-yyyy">
                  DD/MM/YYYY
                </span>
                <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
/>
              </div>
              <div class="group-81">
                <img class="rectangle-46" src="../assets/vectors/rectangle_412_x2.svg" />
                <span class="container-28">
                  10:00
                </span>
                <div class="group-2">
                  <img class="vector-4" src="../assets/vectors/vector_19_x2.svg" />
                </div>
              </div>
            </div>
          </div>
          <img class="reshot-icon-calendar-mph-3-d-7-xwkj-1" src="../assets/vectors/reshot_icon_calendar_mph_3_d_7_xwkj_1_x2.svg" />
        </div>
        <div class="group-18">
          <div class="check-out-1">
            Check Out
          </div>
          <div class="group-161">
            <div class="group-92">
              <img class="rectangle-47" src="../assets/vectors/rectangle_4_x2.svg" />
              <span class="dd-mm-yyyy-1">
                DD/MM/YYYY
              </span>
            </div>
            <div class="group-82">
              <img class="rectangle-48" src="../assets/vectors/rectangle_46_x2.svg" />
              <span class="container-29">
                10:00
              </span>
              <div class="group-3">
                <img class="vector-5" src="../assets/vectors/vector_27_x2.svg" />
              </div>
            </div>
          </div>
        </div>
        <span class="confirm-booking">
          Confirm Booking
        </span>
      </div>
    </div>
  </div>
  
    </>
  )
}

export default App
