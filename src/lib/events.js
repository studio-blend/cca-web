/**
 * Utility functions for generating dynamic, rolling upcoming event dates.
 * Ensures event dates are always future-facing relative to the current date.
 */

export function getUpcomingEventDates() {
  const now = new Date();
  
  // Event 1: Next upcoming Saturday or Sunday (NEET Seminar)
  const nextSunday = new Date(now);
  const daysUntilSunday = (7 - now.getDay()) % 7 || 7;
  nextSunday.setDate(now.getDate() + daysUntilSunday);
  
  // Event 2: Following Sunday (Board Prep Webinar)
  const followingSunday = new Date(nextSunday);
  followingSunday.setDate(nextSunday.getDate() + 7);
  
  // Event 3: Upcoming 1st or 15th of the next month (Batch Admissions)
  const batchDate = new Date(now);
  if (now.getDate() < 15) {
    batchDate.setDate(15);
  } else {
    batchDate.setMonth(now.getMonth() + 1);
    batchDate.setDate(1);
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const formatDate = (d) => `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  const formatMonthYear = (d) => `${monthNames[d.getMonth()]} ${d.getFullYear()}`;

  return {
    neetSeminarDate: formatDate(nextSunday),
    boardWebinarDate: formatDate(followingSunday),
    batchStartDate: formatDate(batchDate),
    batchMonthName: formatMonthYear(batchDate),
  };
}
