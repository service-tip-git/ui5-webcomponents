commit 40eb99c76c93229d43c79797dee970fa53e7c8ad
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Wed Aug 23 11:13:06 2023 +0300

    fix(icons): fix "employee-approvals" icon cutt-off (#7461)
    
    The employee-approvals icon used to be cut-off from the top (as the SVG"s y coordinates were running out of the viewbox) now the SVG path is corrected.
    
    Fixes: #7410
