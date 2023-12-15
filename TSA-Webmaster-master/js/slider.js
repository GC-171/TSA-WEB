$('#range').on("change", function() {
    if (this.value >= 0 && this.value < 60)
    {
        $('.output').val("9.99 $ for 1 month access " );
    } else if (this.value >= 60 && this.value < 120)
    {
        $('.output').val("27.99 $ for 3 months access " );
    } else if (this.value >= 120 && this.value < 180)
    {
        $('.output').val("49.99 $ for 6 months access " );
    } else if (this.value >= 180 && this.value < 240)
    {
        $('.output').val("79.99 $ for 9 months access " );
    }  else if (this.value >= 240 && this.value <= 300)
    {
        $('.output').val("99.99 $ for 12 months access " );
    }
    }).trigger("change");