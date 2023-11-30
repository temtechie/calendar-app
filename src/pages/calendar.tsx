import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarTop from '../components/calendar/calendar-top';
import '../components/calendar/calendar.css';
import { BigCalendar } from '../components/calendar/big-calendar';
import { useEffect, useState } from 'react';
import Modal from '../components/modal/modal';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { getAllEvents } from '../redux/actions/event-action';

export default function CalendarView() {
  const { list } = useAppSelector((state) => state.events);
  const eventList = list ?? [];
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [editEventData, setEditEventData] = useState(null);

  const openModal = (mode: any, eventData: any) => {
    setIsModalOpen(true);
    setModalMode(mode);
    setEditEventData(eventData);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMode('create');
    setEditEventData(null);
  };

  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  const eventsForCalendar = eventList?.map((event) => ({
    title: event?.title,
    start: event?.start,
    end: event?.end,
    resource: event?.description,
  }));

  return (
    <div>
      <CalendarTop openModal={openModal} />
      <BigCalendar events={eventsForCalendar} />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        mode={modalMode}
        eventData={editEventData}
      />
    </div>
  );
}
