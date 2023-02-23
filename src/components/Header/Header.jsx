import React from "react";
import styles from "./Header.module.css";
import { SlideBar } from "../../shared/SlideBar/SlideBar";
import { Button } from "../../shared/Button/Button";
import { Icon } from "../../shared/Icon/Icon";
import { Filter } from "../../shared/Filter/Filter";

export const Header = () => {
  return (
    <div className={styles.header}>
      <p>Среда, 13 окт</p>
      <div className={styles.bar}>
        <SlideBar count="20 из 30 шт" theme="good">
          Новые звонки
        </SlideBar>
        <SlideBar count="40%" theme="medium">
          Качество разговоров
        </SlideBar>
        <SlideBar count="67%" theme="bad">
          Конверсия в заказ
        </SlideBar>
      </div>
      <Button prefix={<Icon nameIcon="search" className={styles.searchIcon}/>} theme="transparent" />
      <Filter hasIcon>ИП Сидорова Александра Михайловна</Filter>
      <Filter hasIcon>
        <Icon nameIcon="avatar" className={styles.avatar} />
      </Filter>
    </div>
  );
};
