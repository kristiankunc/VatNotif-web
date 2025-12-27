// Test if the session object can be serialized
const session = {
  user: {
    cid: 10000010,
    name_first: 'Web',
    name_last: 'Ten',
    name: 'Web Ten',
    id: 'b3713895-749e-4b30-a7b1-10349a1314da'
  },
  expires: '2026-01-26T00:35:22.541Z'
};

try {
  const json = JSON.stringify(session);
  console.log('Serialization successful:', json);
  console.log('Character at position 114:', json.charAt(113), json.charAt(114), json.charAt(115));
  console.log('Around position 114:', json.substring(100, 130));
  
  // Try to parse it back
  const parsed = JSON.parse(json);
  console.log('Parse successful:', parsed);
} catch (e) {
  console.error('Error:', e.message);
}
