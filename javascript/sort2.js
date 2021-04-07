$(function () {
    $(".sort-tab th").click(function () {
        // culumn no you select
        key = $(this).index();
        // toggle ascend or descend
        if ($(this).hasClass("descend")) {
            var change_to = "ascend";
        } else {
            var change_to = "descend";
        }
        // initialize class
        $(this).closest("table").find("th").removeClass("ascend");
        $(this).closest("table").find("th").removeClass("descend");
        $(this).addClass(change_to);
        // get number of line and columns of the table
        var no_row = $(this).closest("table").children().children().length;
        var no_column = $(this).closest("table").children().children().eq(0).children().length;
        // get all entries and keep values in array
        var arr = [];

        // flag for value type "strings" or "number only"
        var flag = 0;  // 0:number only  1:strings
        var re = /\D/;

        for (var i = 1; i < no_row; i++) {
            arr[i - 1] = [];
            for (var j = 0; j < no_column; j++) {
                if (j == key && re.test($(this).closest("table").children().children().eq(i).children().eq(j).text())) {
                    flag = 1;
                }
                arr[i - 1][j] = $(this).closest("table").children().children().eq(i).children().eq(j).text();
            }
        }

        // sort by the key you selected
        var rs = arr.sort(
            function (a, b) {
                //case : value type is number only
                if (flag == 0) {
                    if (change_to == "ascend") {
                        return (a[key] - b[key]);
                    } else {
                        return (b[key] - a[key]);
                    }
                    //case : value contains strings
                } else {
                    if (change_to == "ascend") {
                        if (a[key] > b[key]) {
                            return 1;
                        } else {
                            return -1;
                        }
                    } else {
                        if (b[key] > a[key]) {
                            return 1;
                        } else {
                            return -1;
                        }
                    }
                }
            }
        )

        // insert arranged values into table
        for (var i = 0; i < rs.length; i++) {
            for (var j = 0; j < rs[i].length; j++) {
                $(this).closest("table").children().children().eq(i + 1).children().eq(j).text(rs[i][j]);
            }
        }
    });
});