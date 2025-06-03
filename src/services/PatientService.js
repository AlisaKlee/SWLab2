const patients = [
  // Immediate
  { name: 'Alisa Kleemann', doctor: 'Dr. Schmidt', description: 'descSevereTrauma', urgency: 'Immediate', room: 'A01' },
  { name: 'Emma Groß', doctor: 'Dr. Roth', description: 'descBurnInjury', urgency: 'Immediate', room: 'A03' },
  { name: 'Benno Stahl', doctor: 'Dr. Keller', description: 'descHeartAttack', urgency: 'Immediate', room: 'A02' },

  // VeryUrgent
  { name: 'Sophie Becker', doctor: 'Dr. Maier', description: 'descSevereBleeding', urgency: 'VeryUrgent', room: 'B04' },
  { name: 'xyz', doctor: 'Dr. Haug', description: 'descHeadInjury', urgency: 'VeryUrgent', room: 'B02' },
  { name: 'Paul Richter', doctor: 'Dr. Haug', description: 'descChestPain', urgency: 'VeryUrgent', room: 'B07' },

  // Urgent
  { name: 'Alice Fleischer', doctor: 'Dr. Schmidt', description: 'descArmFracture', urgency: 'Urgent', room: 'C05' },
  { name: 'Tobias Lehmann', doctor: 'Dr. Walter', description: 'descSevereAllergy', urgency: 'Urgent', room: 'C07' },
  { name: 'Jonas Schwarz', doctor: 'Dr. Meier', description: 'descAnkleSprain', urgency: 'Urgent', room: 'C06' },

  // Normal
  { name: 'Lilli Gabler', doctor: 'Dr. Torres', description: 'descFlu', urgency: 'Normal', room: 'D10' },
  { name: 'Lea Zimmer', doctor: 'Dr. Roth', description: 'descCold', urgency: 'Normal', room: 'D11' },
  { name: 'Noah Weber', doctor: 'Dr. Torres', description: 'descSoreThroat', urgency: 'Normal', room: 'D12' },

  // NonUrgent
  { name: 'Lisa Kurz', doctor: 'Dr. Walter', description: 'descDiscomfort', urgency: 'NonUrgent', room: 'E12' },
  { name: 'Mila Braun', doctor: 'Dr. Keller', description: 'descMildCough', urgency: 'NonUrgent', room: 'E13' },
  { name: 'Lukas Kranz', doctor: 'Dr. Schmidt', description: 'descRoutineCheck', urgency: 'NonUrgent', room: 'E14' },

  // Treated
  { name: 'Sabine Müller', doctor: 'Dr. Walter', description: 'descTreatedWound', urgency: 'Treated', room: 'F01' },
  { name: 'Klara Neumann', doctor: 'Dr. Meier', description: 'descObservation', urgency: 'Treated', room: 'F03' },
  { name: 'David Fröhlich', doctor: 'Dr. Haug', description: 'descPostOp', urgency: 'Treated', room: 'F02' },

  // PassedAway
  { name: 'Hildegard Slotta', doctor: 'Dr. Torres', description: 'descDeceased', urgency: 'PassedAway', room: '—' },
  { name: 'Otto Lang', doctor: 'Dr. Keller', description: 'descDeceased', urgency: 'PassedAway', room: '—' },
  { name: 'Anna Vogt', doctor: 'Dr. Schmidt', description: 'descDeceased', urgency: 'PassedAway', room: '—' }
];

export default {
  getAllPatients() {
    const urgencyOrder = [
      'Immediate',
      'VeryUrgent',
      'Urgent',
      'Normal',
      'NonUrgent',
      'Treated',
      'PassedAway'
    ];

    return [...patients].sort((a, b) => {
      const urgencyDiff = urgencyOrder.indexOf(a.urgency) - urgencyOrder.indexOf(b.urgency);
      if (urgencyDiff !== 0) return urgencyDiff;

      // Sortierung nach Nachname (nach Vornamen splitten)
      const aParts = a.name.trim().split(' ');
      const bParts = b.name.trim().split(' ');
      const aLastName = aParts.slice(1).join(' ').toLowerCase();
      const bLastName = bParts.slice(1).join(' ').toLowerCase();

      return aLastName.localeCompare(bLastName);
    });
  },

  getPatientByIndex(index) {
    return patients[index] ?? null;
  },

  updateUrgency(index, newUrgency) {
    if (patients[index]) {
      patients[index].urgency = newUrgency;
    }
  }
};