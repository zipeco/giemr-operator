const listInstance = [
  {
    address: "108.136.131.41",
    port: 8300,
    name: "Klinik Pratama Setia Budi	Trial",
    trialCode: 1311365,
  },
  {
    address: "108.136.179.194",
    port: 8300,
    name: "Permata Bunda	Trial",
    trialCode: 18183135,
  },
  {
    address: "43.218.88.171",
    port: 8300,
    name: "RS UKM	Trial",
    trialCode: 18179197,
  },
  {
    address: "43.218.95.132",
    port: 8300,
    name: "Indriani Kurniadi 	Trial",
    trialCode: 13115205,
  },
  {
    address: "43.218.43.236",
    port: 8300,
    name: "FKTP Marbaniati	Trial",
    trialCode: 5425031,
  },
];

exports.getInstances = (req, res, next) => {
  res.status(200).json({
    message: "Ok",
    data: listInstance,
  });
};
