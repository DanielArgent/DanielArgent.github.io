document.querySelectorAll(".anchor-button").forEach((button)=>{
    // @ts-ignore
    button.addEventListener("click", async (event)=>{
        const target = event.target;
        console.log(target);
        if (target instanceof HTMLButtonElement && target.parentElement !== null) {
            const currentPageUrl = document.location.origin;
            const hash = target.parentElement.getAttribute("id");
            await navigator.clipboard.writeText(`${document.location.origin}${document.location.pathname}#${hash}`);
        }
    });
});

//# sourceMappingURL=metrics.af7a4c84.js.map
