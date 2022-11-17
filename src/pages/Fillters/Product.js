import React from 'react'
import ProductStyle from "./productstyle.module.css"
import Navbar from '../../Component/Navbar'
function Product() {
  return (
    <>
    <Navbar />
  <div className={ProductStyle.Main_header}>
    <div className={ProductStyle.top_head}>
      <div className={ProductStyle.item1}>
        <input
          className={ProductStyle.form_check_input}
          type="checkbox"
          value=""
          id="flexCheckChecked"
        />
      </div>
      <div className={ProductStyle.item2}>Product</div>
      <div className={ProductStyle.item3}>Category BSR</div>
      <div className={ProductStyle.item4}>Price</div>
      <div className={ProductStyle.item5}>Monthly Sales</div>
      <div className={ProductStyle.item6}>Monthly revenue</div>
      <div className={ProductStyle.item7}>Reviews</div>
    </div>

    <div className={ProductStyle.top_head1}>
      <div className={ProductStyle.items1}>
        <input
          className={ProductStyle.form_check_input}
          type="checkbox"
          value=""
          id="flexCheckChecked"
        />
        <div className={ProductStyle.icon1}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="bookmark"
            className="svg-inline--fa fa-bookmark"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 33654V452z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items2}>
        <div className={ProductStyle.Pics}>
        <img
          className={ProductStyle.image1}
          src="https://m.media-amazon.com/images/I/61mczrLWcJS._SX450_.jpg"
        />
        </div>
        <div className={ProductStyle.sub_item_head}>
          Chicka-d Women's Standard Hailey Sweatshirt, Ash Grey
          <div className={ProductStyle.sub_item}>
            B08YN31QP4

            <div className={ProductStyle.icon2}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="copy"
                className="svg-inline--fa fa-copy"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={ProductStyle.items3}>
        <div className={ProductStyle.text1}>Sports and outdoors</div>
        <div className={ProductStyle.text2}>#27,007</div>
        <div className={ProductStyle.icon3}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chart-line"
            className="svg-inline--fa fa-chart-line"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M48 408C48 421.3 58.75 432 72 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H72C32.24 480 0 447.8 0 408V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V408zM336.1 304.1C327.6 314.3 312.4 314.3 303 304.1L223.1 225.9L144.1 304.1C135.6 314.3 120.4 314.3 111 304.1C101.7 295.6 101.7 280.4 111 271L207 175C211.5 170.5 217.6 168 223.1 168C230.4 168 236.5 170.5 240.1 175L320 254.1L439 135C448.4 125.7 463.6 125.7 472.1 135C482.3 144.4 482.3 159.6 472.1 168.1L336.1 304.1z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items4}>
        <div className={ProductStyle.text3}>$12.18</div>
        <div className={ProductStyle.icon4}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chart-line"
            className="svg-inline--fa fa-chart-line"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M48 408C48 421.3 58.75 432 72 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H72C32.24 480 0 447.8 0 408V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V408zM336.1 304.1C327.6 314.3 312.4 314.3 303 304.1L223.1 225.9L144.1 304.1C135.6 314.3 120.4 314.3 111 304.1C101.7 295.6 101.7 280.4 111 271L207 175C211.5 170.5 217.6 168 223.1 168C230.4 168 236.5 170.5 240.1 175L320 254.1L439 135C448.4 125.7 463.6 125.7 472.1 135C482.3 144.4 482.3 159.6 472.1 168.1L336.1 304.1z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items5}>
        <div className={ProductStyle.text4}>$128</div>
        <div className={ProductStyle.icon5}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chart-line"
            className="svg-inline--fa fa-chart-line"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M48 408C48 421.3 58.75 432 72 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H72C32.24 480 0 447.8 0 408V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V408zM336.1 304.1C327.6 314.3 312.4 314.3 303 304.1L223.1 225.9L144.1 304.1C135.6 314.3 120.4 314.3 111 304.1C101.7 295.6 101.7 280.4 111 271L207 175C211.5 170.5 217.6 168 223.1 168C230.4 168 236.5 170.5 240.1 175L320 254.1L439 135C448.4 125.7 463.6 125.7 472.1 135C482.3 144.4 482.3 159.6 472.1 168.1L336.1 304.1z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items6}><div className={ProductStyle.text5}>$12.453</div></div>
      <div className={ProductStyle.items7}>
        <div className={ProductStyle.icon6}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div className={ProductStyle.top_head1}>
      <div className={ProductStyle.items1}>
        <input
          className={ProductStyle.form_check_input}
          type="checkbox"
          value=""
          id="flexCheckChecked"
        />
        <div className={ProductStyle.icon1}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="bookmark"
            className="svg-inline--fa fa-bookmark"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 33654V452z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items2}>
      <div className={ProductStyle.Pics}>
        <img
          className={ProductStyle.image1}
          src="https://m.media-amazon.com/images/I/81OgCiiO9OL._SX450_.jpg"
        />
        </div>
        <div className={ProductStyle.sub_item_head}>
          Collections Etc 3-Piece John F. Kennedy World War 2 Collectible
          <div className={ProductStyle.sub_item}>
            B09CPRN7VZ

            <div className={ProductStyle.icon2}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="copy"
                className="svg-inline--fa fa-copy"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={ProductStyle.items3}>
        <div className={ProductStyle.text1}>Collectible Coins</div>
        <div className={ProductStyle.text2}>#345.987</div>
        <div className={ProductStyle.icon3}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chart-line"
            className="svg-inline--fa fa-chart-line"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M48 408C48 421.3 58.75 432 72 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H72C32.24 480 0 447.8 0 408V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V408zM336.1 304.1C327.6 314.3 312.4 314.3 303 304.1L223.1 225.9L144.1 304.1C135.6 314.3 120.4 314.3 111 304.1C101.7 295.6 101.7 280.4 111 271L207 175C211.5 170.5 217.6 168 223.1 168C230.4 168 236.5 170.5 240.1 175L320 254.1L439 135C448.4 125.7 463.6 125.7 472.1 135C482.3 144.4 482.3 159.6 472.1 168.1L336.1 304.1z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items4}>
        <div className={ProductStyle.text3}>$45.18</div>
        <div className={ProductStyle.icon4}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chart-line"
            className="svg-inline--fa fa-chart-line"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M48 408C48 421.3 58.75 432 72 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H72C32.24 480 0 447.8 0 408V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V408zM336.1 304.1C327.6 314.3 312.4 314.3 303 304.1L223.1 225.9L144.1 304.1C135.6 314.3 120.4 314.3 111 304.1C101.7 295.6 101.7 280.4 111 271L207 175C211.5 170.5 217.6 168 223.1 168C230.4 168 236.5 170.5 240.1 175L320 254.1L439 135C448.4 125.7 463.6 125.7 472.1 135C482.3 144.4 482.3 159.6 472.1 168.1L336.1 304.1z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items5}>
        <div className={ProductStyle.text4}>$387</div>
        <div className={ProductStyle.icon5}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chart-line"
            className="svg-inline--fa fa-chart-line"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M48 408C48 421.3 58.75 432 72 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H72C32.24 480 0 447.8 0 408V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V408zM336.1 304.1C327.6 314.3 312.4 314.3 303 304.1L223.1 225.9L144.1 304.1C135.6 314.3 120.4 314.3 111 304.1C101.7 295.6 101.7 280.4 111 271L207 175C211.5 170.5 217.6 168 223.1 168C230.4 168 236.5 170.5 240.1 175L320 254.1L439 135C448.4 125.7 463.6 125.7 472.1 135C482.3 144.4 482.3 159.6 472.1 168.1L336.1 304.1z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items6}><div className={ProductStyle.text5}>$25.67</div></div>
      <div className={ProductStyle.items7}>
        <div className={ProductStyle.icon6}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div className={ProductStyle.top_head1}>
      <div className={ProductStyle.items1}>
        <input
          className={ProductStyle.form_check_input}
          type="checkbox"
          value=""
          id="flexCheckChecked"
        />
        <div className={ProductStyle.icon1}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="bookmark"
            className="svg-inline--fa fa-bookmark"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 33654V452z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items2}>
      <div className={ProductStyle.Pics}>
        <img
          className={ProductStyle.image1}
          src="https://m.media-amazon.com/images/I/51D8CaeGC+L._SX450_.jpg"
        />
        </div>
        <div className={ProductStyle.sub_item_head}>
          Zombie 3rd Place Perimeter Medal Bronze, 2.75" Halloween Zombie
          <div className={ProductStyle.sub_item}>
            B084C44K6Z

            <div className={ProductStyle.icon2}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="copy"
                className="svg-inline--fa fa-copy"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={ProductStyle.items3}>
        <div className={ProductStyle.text1}>Sports & Outdoors</div>
        <div className={ProductStyle.text2}>#67,008</div>
        <div className={ProductStyle.icon3}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chart-line"
            className="svg-inline--fa fa-chart-line"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M48 408C48 421.3 58.75 432 72 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H72C32.24 480 0 447.8 0 408V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V408zM336.1 304.1C327.6 314.3 312.4 314.3 303 304.1L223.1 225.9L144.1 304.1C135.6 314.3 120.4 314.3 111 304.1C101.7 295.6 101.7 280.4 111 271L207 175C211.5 170.5 217.6 168 223.1 168C230.4 168 236.5 170.5 240.1 175L320 254.1L439 135C448.4 125.7 463.6 125.7 472.1 135C482.3 144.4 482.3 159.6 472.1 168.1L336.1 304.1z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items4}>
        <div className={ProductStyle.text3}>$12.98</div>
        <div className={ProductStyle.icon4}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chart-line"
            className="svg-inline--fa fa-chart-line"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M48 408C48 421.3 58.75 432 72 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H72C32.24 480 0 447.8 0 408V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V408zM336.1 304.1C327.6 314.3 312.4 314.3 303 304.1L223.1 225.9L144.1 304.1C135.6 314.3 120.4 314.3 111 304.1C101.7 295.6 101.7 280.4 111 271L207 175C211.5 170.5 217.6 168 223.1 168C230.4 168 236.5 170.5 240.1 175L320 254.1L439 135C448.4 125.7 463.6 125.7 472.1 135C482.3 144.4 482.3 159.6 472.1 168.1L336.1 304.1z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items5}>
        <div className={ProductStyle.text4}>$265</div>
        <div className={ProductStyle.icon5}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chart-line"
            className="svg-inline--fa fa-chart-line"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M48 408C48 421.3 58.75 432 72 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H72C32.24 480 0 447.8 0 408V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V408zM336.1 304.1C327.6 314.3 312.4 314.3 303 304.1L223.1 225.9L144.1 304.1C135.6 314.3 120.4 314.3 111 304.1C101.7 295.6 101.7 280.4 111 271L207 175C211.5 170.5 217.6 168 223.1 168C230.4 168 236.5 170.5 240.1 175L320 254.1L439 135C448.4 125.7 463.6 125.7 472.1 135C482.3 144.4 482.3 159.6 472.1 168.1L336.1 304.1z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items6}><div className={ProductStyle.text5}>$78.321</div></div>
      <div className={ProductStyle.items7}>
        <div className={ProductStyle.icon6}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div className={ProductStyle.top_head1}>
      <div className={ProductStyle.items1}>
        <input
          className={ProductStyle.form_check_input}
          type="checkbox"
          value=""
          id="flexCheckChecked"
        />
        <div className={ProductStyle.icon1}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="bookmark"
            className="svg-inline--fa fa-bookmark"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 33654V452z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items2}>
      <div className={ProductStyle.Pics}>
        <img
          className={ProductStyle.image1}
          src="https://m.media-amazon.com/images/I/71iKEW0kOeS._SX450_.jpg"
        />
        </div>
        <div className={ProductStyle.sub_item_head}>
          E&K Sunrise 3' x 97' Green Balcony Screen Privacy Fence
          <div className={ProductStyle.sub_item}>
            B093R5SSW6

            <div className={ProductStyle.icon2}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="copy"
                className="svg-inline--fa fa-copy"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={ProductStyle.items3}>
        <div className={ProductStyle.text1}>Patio, Lawn</div>
        <div className={ProductStyle.text2}>#21.745</div>
        <div className={ProductStyle.icon3}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chart-line"
            className="svg-inline--fa fa-chart-line"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M48 408C48 421.3 58.75 432 72 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H72C32.24 480 0 447.8 0 408V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V408zM336.1 304.1C327.6 314.3 312.4 314.3 303 304.1L223.1 225.9L144.1 304.1C135.6 314.3 120.4 314.3 111 304.1C101.7 295.6 101.7 280.4 111 271L207 175C211.5 170.5 217.6 168 223.1 168C230.4 168 236.5 170.5 240.1 175L320 254.1L439 135C448.4 125.7 463.6 125.7 472.1 135C482.3 144.4 482.3 159.6 472.1 168.1L336.1 304.1z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items4}>
        <div className={ProductStyle.text3}>$56.45</div>
        <div className={ProductStyle.icon4}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chart-line"
            className="svg-inline--fa fa-chart-line"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M48 408C48 421.3 58.75 432 72 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H72C32.24 480 0 447.8 0 408V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V408zM336.1 304.1C327.6 314.3 312.4 314.3 303 304.1L223.1 225.9L144.1 304.1C135.6 314.3 120.4 314.3 111 304.1C101.7 295.6 101.7 280.4 111 271L207 175C211.5 170.5 217.6 168 223.1 168C230.4 168 236.5 170.5 240.1 175L320 254.1L439 135C448.4 125.7 463.6 125.7 472.1 135C482.3 144.4 482.3 159.6 472.1 168.1L336.1 304.1z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items5}>
        <div className={ProductStyle.text4}>$187</div>
        <div className={ProductStyle.icon5}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chart-line"
            className="svg-inline--fa fa-chart-line"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M48 408C48 421.3 58.75 432 72 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H72C32.24 480 0 447.8 0 408V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V408zM336.1 304.1C327.6 314.3 312.4 314.3 303 304.1L223.1 225.9L144.1 304.1C135.6 314.3 120.4 314.3 111 304.1C101.7 295.6 101.7 280.4 111 271L207 175C211.5 170.5 217.6 168 223.1 168C230.4 168 236.5 170.5 240.1 175L320 254.1L439 135C448.4 125.7 463.6 125.7 472.1 135C482.3 144.4 482.3 159.6 472.1 168.1L336.1 304.1z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items6}><div className={ProductStyle.text5}>$12.453</div></div>
      <div className={ProductStyle.items7}>
        <div className={ProductStyle.icon6}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div className={ProductStyle.top_head1}>
      <div className={ProductStyle.items1}>
        <input
          className={ProductStyle.form_check_input}
          type="checkbox"
          value=""
          id="flexCheckChecked"
        />
        <div className={ProductStyle.icon1}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="bookmark"
            className="svg-inline--fa fa-bookmark"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 33654V452z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items2}>
      <div className={ProductStyle.Pics}>
        <img
          className={ProductStyle.image1}
          src="https://m.media-amazon.com/images/I/71TRH-xrdVL._SX450_.jpg"
        />
        </div>
        <div className={ProductStyle.sub_item_head}>
          Bohemian Tibetan Tiger and Floral Area Rug Hand Woven Vintage
          <div className={ProductStyle.sub_item}>
            B09XV5WXFG

            <div className={ProductStyle.icon2}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="copy"
                className="svg-inline--fa fa-copy"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={ProductStyle.items3}>
        <div className={ProductStyle.text1}>Home and kitchen</div>
        <div className={ProductStyle.text2}>#34.567</div>
        <div className={ProductStyle.icon3}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chart-line"
            className="svg-inline--fa fa-chart-line"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M48 408C48 421.3 58.75 432 72 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H72C32.24 480 0 447.8 0 408V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V408zM336.1 304.1C327.6 314.3 312.4 314.3 303 304.1L223.1 225.9L144.1 304.1C135.6 314.3 120.4 314.3 111 304.1C101.7 295.6 101.7 280.4 111 271L207 175C211.5 170.5 217.6 168 223.1 168C230.4 168 236.5 170.5 240.1 175L320 254.1L439 135C448.4 125.7 463.6 125.7 472.1 135C482.3 144.4 482.3 159.6 472.1 168.1L336.1 304.1z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items4}>
        <div className={ProductStyle.text3}>$18.65</div>
        <div className={ProductStyle.icon4}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chart-line"
            className="svg-inline--fa fa-chart-line"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M48 408C48 421.3 58.75 432 72 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H72C32.24 480 0 447.8 0 408V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V408zM336.1 304.1C327.6 314.3 312.4 314.3 303 304.1L223.1 225.9L144.1 304.1C135.6 314.3 120.4 314.3 111 304.1C101.7 295.6 101.7 280.4 111 271L207 175C211.5 170.5 217.6 168 223.1 168C230.4 168 236.5 170.5 240.1 175L320 254.1L439 135C448.4 125.7 463.6 125.7 472.1 135C482.3 144.4 482.3 159.6 472.1 168.1L336.1 304.1z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items5}>
        <div className={ProductStyle.text4}>$234</div>
        <div className={ProductStyle.icon5}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="chart-line"
            className="svg-inline--fa fa-chart-line"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M48 408C48 421.3 58.75 432 72 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H72C32.24 480 0 447.8 0 408V56C0 42.75 10.75 32 24 32C37.25 32 48 42.75 48 56V408zM336.1 304.1C327.6 314.3 312.4 314.3 303 304.1L223.1 225.9L144.1 304.1C135.6 314.3 120.4 314.3 111 304.1C101.7 295.6 101.7 280.4 111 271L207 175C211.5 170.5 217.6 168 223.1 168C230.4 168 236.5 170.5 240.1 175L320 254.1L439 135C448.4 125.7 463.6 125.7 472.1 135C482.3 144.4 482.3 159.6 472.1 168.1L336.1 304.1z"
            ></path>
          </svg>
        </div>
      </div>
      <div className={ProductStyle.items6}><div className={ProductStyle.text5}>$12.453</div></div>
      <div className={ProductStyle.items7}>
        <div className={ProductStyle.icon6}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            className="svg-inline--fa fa-star"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Product