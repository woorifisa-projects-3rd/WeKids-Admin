"use server";

export const fetchMembers = async (name, phone) => {
  console.log(name, phone);

  const response = await fetch(
    `http://localhost:8080/api/v1/admin/members?name=${name}&phone=${phone}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `Authorization=eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6MSwicm9sZSI6IlJPTEVfQURNSU4iLCJpYXQiOjE3MzMzNzY1NTcsImV4cCI6MTczNjAwNDU1N30.wkMCov7qS2ZUC3fm0XZcJlvEDwFdYq6xy145mjuBblA;`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("failed to fetch");
  }

  const data = await response.json();

  return data;
};

export const fetchLogs = async (startDate, endDate, logLevel) => {
  const response = await fetch(
    `http://localhost:8080/api/v1/admin/logs?start=${startDate || ""}&end=${
      endDate || ""
    }&level=${logLevel}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `Authorization=eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6MSwicm9sZSI6IlJPTEVfQURNSU4iLCJpYXQiOjE3MzMzNzY1NTcsImV4cCI6MTczNjAwNDU1N30.wkMCov7qS2ZUC3fm0XZcJlvEDwFdYq6xy145mjuBblA;`,
      },
    }
  );

  if (!response.ok) throw new Error("failed to fetch");

  const data = await response.json();

  return data;
};

export const modifyCardState = async (cardId, state) => {
  console.log(state);

  const response = await fetch(`http://localhost:8080/api/v1/admin/cards/${cardId}/state`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `Authorization=eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6MSwicm9sZSI6IlJPTEVfQURNSU4iLCJpYXQiOjE3MzMzNzY1NTcsImV4cCI6MTczNjAwNDU1N30.wkMCov7qS2ZUC3fm0XZcJlvEDwFdYq6xy145mjuBblA;`,
    },
    body: JSON.stringify({
      state: state,
    }),
  });

  if (!response.ok) throw new Error("failed to modify");

  const data = await response.json();

  return data;
};

export const modifyAccountState = async (accountId, state) => {
  const response = await fetch(`http://localhost:8080/api/v1/admin/accounts/${accountId}/state`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `Authorization=eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6MSwicm9sZSI6IlJPTEVfQURNSU4iLCJpYXQiOjE3MzMzNzY1NTcsImV4cCI6MTczNjAwNDU1N30.wkMCov7qS2ZUC3fm0XZcJlvEDwFdYq6xy145mjuBblA;`,
    },
    body: JSON.stringify({
      state: state,
    }),
  });

  if (!response.ok) throw new Error("failed to modify");

  const data = await response.json();

  return data;
};

export const modifyMemberState = async (memberId, state) => {
  const response = await fetch(`http://localhost:8080/api/v1/admin/members/${memberId}/state`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `Authorization=eyJhbGciOiJIUzI1NiJ9.eyJtZW1iZXJJZCI6MSwicm9sZSI6IlJPTEVfQURNSU4iLCJpYXQiOjE3MzMzNzY1NTcsImV4cCI6MTczNjAwNDU1N30.wkMCov7qS2ZUC3fm0XZcJlvEDwFdYq6xy145mjuBblA;`,
    },
    body: JSON.stringify({
      state: state,
    }),
  });

  if (!response.ok) throw new Error("failed to modify");

  const data = await response.json();

  return data;
};
