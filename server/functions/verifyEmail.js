async function verifyEmail(email) {
  const body = {
    api_key: process.env.MAIL_KEY,
    email_address: email,
  };
  const response = await fetch("https://verify.maileroo.net/check", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    method: "POST",
  });
  const responseJson = await response.json();
  if (!response.ok) {
    console.error(responseJson);
    console.log();
  }

  if (responseJson.success) {
    if (responseJson.data.mx_found) {
      return true;
    }
  }

  return false;
}

module.exports = verifyEmail;
