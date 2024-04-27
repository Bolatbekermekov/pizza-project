import React, { FC } from "react";
import { Link } from "react-router-dom";

export const CartEmpty:FC = () => (
  <div className="cart cart--empty">
    <h2>
      Корзина пустая <span>😕</span>
    </h2>
    <p>
      Вероятней всего, вы не заказывали ещё пиццу.
      <br />
      Для того, чтобы заказать пиццу, перейди на главную страницу.
    </p>
    <img
      src="data:image/jpeg;base64,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"
      alt="Empty cart"
    />
    <Link to="/" className="button button--black">
      <span>Вернуться назад</span>
    </Link>
  </div>
);