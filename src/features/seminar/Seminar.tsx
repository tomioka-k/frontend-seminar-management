import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import {
  fetchAsyncGetSeminars,
  selectSelectedSeminar,
  selectSeminars,
} from "./seminarSlice";
import styles from "./Seminar.module.css";
import Header from "../Header";
import SeminarCard from "./SeminarCard";
import SeminarDetail from "./seminarDetail";

const Seminar = () => {
  const dispatch: AppDispatch = useDispatch();
  const seminars = useSelector(selectSeminars);
  const selectedSeminar = useSelector(selectSelectedSeminar);

  useEffect(() => {
    const fetchBootLoader = async () => {
      await dispatch(fetchAsyncGetSeminars());
    };
    fetchBootLoader();
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {seminars.map((seminar) => (
              <div className={styles.seminarCard} key={seminar.id}>
                <SeminarCard
                  id={seminar.id}
                  name={seminar.name}
                  method={seminar.method}
                  affiliation={seminar.affiliation}
                  department={seminar.department}
                  staff={seminar.staff}
                  place={seminar.place}
                  start_date={seminar.start_date}
                  end_date={seminar.end_date}
                  start_application_date={seminar.start_application_date}
                  end_application_date={seminar.end_application_date}
                  number_of_attendees={seminar.number_of_attendees}
                  capacity={seminar.capacity}
                  application_page={seminar.application_page}
                  application_list={seminar.application_page}
                  audience_page={seminar.audience_page}
                  event_page={seminar.event_page}
                  is_reserved={seminar.is_reserved}
                  invitation_mail={seminar.invitation_mail}
                  remaind_mail={seminar.remaind_mail}
                  viewing_guid_mail={seminar.viewing_guid_mail}
                  thank_you_mail={seminar.thank_you_mail}
                  creater={seminar.creater}
                  created_at={seminar.created_at}
                  updated_at={seminar.updated_at}
                />
              </div>
            ))}
          </Grid>
          <Grid item xs={6}>
            {selectedSeminar.id === 0 ? null : (
              <div className={styles.detailColumn}>
                <SeminarDetail />
              </div>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Seminar;
