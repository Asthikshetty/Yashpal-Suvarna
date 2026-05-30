export function getConstituencyReply(question: string) {
  const query = question.toLowerCase();
  if (query.includes('it') || query.includes('bt') || query.includes('employment')) {
    return 'The IT-BT Park proposal is highlighted as a flagship employment initiative for Udupi youth.';
  }
  if (query.includes('grievance') || query.includes('request')) {
    return 'Use the Citizen Services section to submit a grievance. A request ID is generated for tracking.';
  }
  if (query.includes('office') || query.includes('contact')) {
    return 'The Contact section lists MLA office, constituency office, email, social links, and map access.';
  }
  return 'This portal can help with project updates, citizen services, constituency reports, event information, and development priorities.';
}
