function allcheck( tf ) {
   var ElementsCount = document.sampleform.elements.length; // チェックボックスの数
   for( i=0 ; i<ElementsCount ; i++ ) {
      document.sampleform.elements[i].checked = tf; // ON・OFFを切り替え
   }
}

$(function () {
    $(".clear-button").on("click", function () {
        clearForm(this.form);
    });

    function clearForm (form) {
        $(form)
            .find("input, select, textarea")
            .not(":button, :submit, :reset, :hidden")
            .val("")
            .prop("checked", false)
            .prop("selected", false)
        ;

        $(form).find(":radio").filter("[data-default]").prop("checked", true);
    }
});