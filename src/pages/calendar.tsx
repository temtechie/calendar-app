import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarTop from '../components/calendar/calendar-top';
import '../components/calendar/calendar.css';
import { BigCalendar } from '../components/calendar/big-calendar';
import { useEffect, useState } from 'react';
import Modal from '../components/modal/modal';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { getAllEvents } from '../redux/actions/event-action';
import Loading from '../components/common/loading/loading';

export default function CalendarView() {
  const { list, loading } = useAppSelector((state) => state.events);
  // const eventList = list ?? [];
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

  const eventsForCalendar = list
    ? list.map((event) => ({
        title: event?.title,
        start: new Date(event?.start),
        end: new Date(event?.end),
      }))
    : [];

  if (loading) return <Loading />;

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
