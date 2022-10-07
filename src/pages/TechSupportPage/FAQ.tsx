import { Box } from '@mui/material';
import { useState } from 'react';
import { technical, topUp, common, withdraw } from './data';

type TFaqItem = {
  question: string;
  answer: string;
};

type TFaqItemProps = {
  faqItem: TFaqItem;
  index: number;
};

const FaqItem = ({ faqItem, index }: TFaqItemProps) => {
  const [isActive, setActive] = useState(false);

  return (
    <Box>
      <Box className={`faq-item__question ${isActive ? 'active' : ''}`} onClick={() => setActive(!isActive)}>
        {`${index}. `}
        {faqItem.question}
      </Box>
      <Box className={`faq-item__answer ${isActive ? 'active' : ''}`}>{faqItem.answer}</Box>
    </Box>
  );
};

type TFaqArray = TFaqItem[];

type TFaqCategoryListProps = {
  faqArray: TFaqArray;
  title: string;
};

const FaqCategoryList = ({ faqArray, title }: TFaqCategoryListProps) => {
  return (
    <Box className="FAQ__category-list">
      <Box className="FAQ__category-title">{title}</Box>
      <Box className="FAQ__list">
        {faqArray.map((item: TFaqItem, index: number) => {
          return <FaqItem key={`faq-${index}`} faqItem={item} index={index + 1} />;
        })}
      </Box>
    </Box>
  );
};

export const FAQ = () => {
  return (
    <>
      <Box className="FAQ__title">Часто задаваемые вопросы</Box>
      <Box className="FAQ__container">
        <FaqCategoryList title="Технические" faqArray={technical} />
        <FaqCategoryList title="Пополнение" faqArray={topUp} />
        <FaqCategoryList title="Общие" faqArray={common} />
        <FaqCategoryList title="Вывод" faqArray={withdraw} />
      </Box>
    </>
  );
};
