$(document).ready(function () {

    // FETCHING DATA FROM JSON FILE
    $.getJSON("entry.json",
        function (data) {
            var Entry = '';

            // ITERATING THROUGH OBJECTS
            $.each(data, function (key, value) {

                //CONSTRUCTION OF ROWS HAVING
                // DATA FROM JSON OBJECT
                Entry += '<tr>';
                Entry += '<td>' +
                    value.MachineName + '</td>';

                Entry += '<td>' +
                    value.MachineID + '</td>';

                Entry += '<td>' +
                    value.Today + '</td>';

                Entry += '<td>' +
                    value.MTD + '</td>';

                Entry += '<td>' +
                    value.YTD + '</td>';

                Entry += '<td>' +
                    value.ActivePower + '</td>';

                Entry += '<td>' +
                    value.ApparentPower + '</td>';

                Entry += '<td>' +
                    value.ReactivePower + '</td>';

                Entry += '<td>' +
                    value.Current + '</td>';

                Entry += '<td>' +
                    value.Voltage + '</td>';

                Entry += '<td>' +
                    value.PowerFactor + '</td>';

                Entry += '<td>' +
                    value.Today1 + '</td>';

                Entry += '<td>' +
                    value.MTD1 + '</td>';

                Entry += '<td>' +
                    value.YTD + '</td>';

                Entry += '</tr>';
            });

            //INSERTING ROWS INTO TABLE
            $('#table').append(Entry);
        });
});