'use strict';

function takeFromInterval(arr, firstValue, secondValue) { 
    if (typeof firstValue !== 'number' || typeof secondValue !== 'number') {
        return [];  
    } 
    const minValue = Math.min(firstValue, secondValue); 
    const maxValue  = Math.max(firstValue, secondValue); 
    
    return arr.filter(item => (item >= minValue  && item <= maxValue)); 
}

alert(takeFromInterval([1,2,3], 1, 3));