import {
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { create } from "domain";
import React from "react";
import { useSelector } from "react-redux";
import { selectSelectedSeminar, selectSeminar } from "./seminarSlice";

const createData = (label: string, value: any) => {
  return { label, value };
};

const SeminarDetail = () => {
  const selectSeminar = useSelector(selectSelectedSeminar);
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
  } = selectSeminar;

  const seminarRows = [
    createData("セミナー名", name),
    createData("開催方法", method),
    createData("所属", affiliation),
    createData("部署", department),
    createData("担当者", staff),
    createData("場所", place),
    createData(
      "開催期間",
      start_date === end_date ? start_date : `${start_date} >>> ${end_date}`
    ),
    createData("申込開始日", start_application_date),
    createData("申込終了日", end_application_date),
    createData("申込者", number_of_attendees),
    createData("定員", capacity),
  ];

  console.log(selectSeminar);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            {seminarRows.map((sem) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  <b>{sem.label}</b>
                </TableCell>
                <TableCell align="right">{sem.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SeminarDetail;
