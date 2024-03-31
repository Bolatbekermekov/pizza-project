import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header() {
  return (
    <div class="header">
      <div class="container">
        <Link to="/">
          <div class="header__logo">
            <img
              width="38"
              src="data:image/jpeg;base64,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"
              alt="Pizza logo"
            />
            <div>
              <h1>Dodo Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search/>
        <Link to="/cart">
          <div class="header__cart">
            <a href="/cart.html" class="button button--cart">
              <span>520 ₽</span>
              <div class="button__delimiter"></div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>3</span>
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
}
