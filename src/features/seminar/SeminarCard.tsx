import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { SEMINAR } from "../typs";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { selectSeminar } from "./seminarSlice";
import { useDispatch } from "react-redux";

const SeminarCard: React.FC<SEMINAR> = (props) => {
  const {
    id,
    name,
    method,
    affiliation,
    department,
    staff,
    place,
    start_date,
    end_date,
    start_application_date,
    end_application_date,
    number_of_attendees,
    capacity,
    application_page,
    application_list,
    audience_page,
    event_page,
    is_reserved,
    invitation_mail,
    remaind_mail,
    viewing_guid_mail,
    thank_you_mail,
    creater,
    created_at,
    updated_at,
  } = props;
  const dispatch = useDispatch();

  const dateTranslate = () => {
    return start_date === end_date
      ? start_date
      : `${start_date} >>> ${end_date}`;
  };

  const chipLabelMethodColor = () => {
    return method === "オンライン" ? "primary" : "error";
  };
  const chipLabelAffiliationColor = () => {
    switch (affiliation) {
      case "防水":
        return "primary";
      case "床":
        return "warning";
      case "住建":
        return "success";
    }
  };
  const selectEditedSeminar = () => {
    dispatch(selectSeminar(props));
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Stack direction="row" spacing={1}>
            <Chip label={method} color={chipLabelMethodColor()} size="small" />
            <Chip
              label={affiliation}
              color={chipLabelAffiliationColor()}
              size="small"
            />
          </Stack>
        </CardContent>
        <CardHeader title={name} />
        <CardContent>
          <EventNoteIcon />
          {dateTranslate()}
        </CardContent>
        <Button onClick={selectEditedSeminar}>test</Button>
      </Card>
    </div>
  );
};

export default SeminarCard;
