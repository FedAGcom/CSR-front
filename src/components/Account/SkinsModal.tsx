import React, { useCallback } from 'react';
import { data } from '../../mocks/prizes';
import { ButtonBasic, ModalBasic } from '../index';
import { useState } from 'react';
import { AdminSettingsModal } from '../AdminPanel/AdminSettings/AdminSettingsModal';
import { CommonBtn } from '../AdminPanel/AdminSettings/AdminSettings';

interface ISkinsModalProps {
  open: boolean;
  onClose: () => void;
  style?: React.CSSProperties;
}

interface ICommonSkinsBlockProps {
  title: string;
  children: React.ReactNode;
}

type TFilteredList = {
  id: number;
  title: string;
  img: string;
  class: string;
};

const CommonSkinsBlock: React.FC<ICommonSkinsBlockProps> = ({ title, children }) => {
  return (
    <div className="skins__inner">
      <p className="skins__name">{title}</p>
      <div className="skins__card-wrapper">{children}</div>
    </div>
  );
};

export const SkinsModal: React.FC<ISkinsModalProps> = ({ onClose, open, style }) => {
  const [filteredList, setList] = useState<TFilteredList[]>(data);
  const [chooseByClient, setChooseByClient] = useState<TFilteredList[]>([]);
  const [isConfirmModalOpen, setConfirmModal] = useState<boolean>(false);

  const handleClose = () => {
    onClose();
    setList(data);
    setChooseByClient([]);
    setConfirmModal(false);
  };

  const handleClick = useCallback(
    (id: number) => {
      const handleChoose: TFilteredList = data.find((item) => item.id === id) ?? ({} as TFilteredList);
      setList(data.filter((item) => item.id !== id));
      setChooseByClient([...chooseByClient, handleChoose]);
    },
    [chooseByClient],
  );

  const handleReverseClick = useCallback(
    (id: number) => {
      const handleChoose: TFilteredList = chooseByClient.find((item) => item.id === id) ?? ({} as TFilteredList);
      setChooseByClient(chooseByClient.filter((item) => item.id !== id));
      setList([...filteredList, handleChoose]);
    },
    [filteredList],
  );

  const handleSetRequest = () => {
    console.log(chooseByClient, 'chooseByClient');
    setConfirmModal(true);
  };

  return (
    <ModalBasic open={open} onClose={handleClose} style={style}>
      <div className="skins__wrapper">
        <p className="skins__title">Вывод скинов</p>

        <div className="skins">
          <CommonSkinsBlock title="Доступные">
            {filteredList.map((item: TFilteredList) => (
              <div
                key={item.id}
                className={`skins__card common ${item.class}`}
                onClick={() => {
                  handleClick(item.id);
                }}
              >
                <img src={item.img} alt="" />

                <div className="skins__card-desc">
                  <span className="skins__card-desc__model">{item.title}</span>
                  <span className="skins__card-desc__species">Разновидность</span>
                </div>
              </div>
            ))}
          </CommonSkinsBlock>

          <CommonSkinsBlock title="Выбранные">
            {chooseByClient.map((item: TFilteredList) => (
              <div
                key={item.id}
                className={`skins__card common ${item.class}`}
                onClick={() => handleReverseClick(item.id)}
              >
                <img src={item.img} alt="" />

                <div className="skins__card-desc">
                  <span className="skins__card-desc__model">{item.title}</span>
                  <span className="skins__card-desc__species">Разновидность</span>
                </div>
              </div>
            ))}
          </CommonSkinsBlock>
        </div>

        <div className="skins__btn">
          <ButtonBasic className="admin" style={{ width: '237px', padding: '10px 35px' }} onClick={handleSetRequest}>
            Отправить запрос
          </ButtonBasic>
          <AdminSettingsModal
            open={isConfirmModalOpen}
            onClose={handleClose}
            title="Запрос на вывод отправлен"
            subtitle="Ожидайте трейд запрос через Steam в течение некоторого времени."
          >
            <CommonBtn btnName="Закрыть" onClick={handleClose} />
          </AdminSettingsModal>
        </div>
      </div>
    </ModalBasic>
  );
};
