// s = "A man, a plan, a canal: Panama";
s = "race a car"

Forward = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
Backward = Forward.split('').reverse().join('').replace(/[^a-z0-9]/gi, '');

alert(Forward == Backward);