import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from "@syncfusion/ej2-react-schedule";
import { loadCldr } from "@syncfusion/ej2-base";
import { L10n } from "@syncfusion/ej2-base"
import config from '@/data/calendar.json'

import * as gregorian from "cldr-data/main/fa/ca-gregorian.json";
import * as numbers from "cldr-data/main/fa/numbers.json";
import * as timeZoneNames from "cldr-data/main/fa/timeZoneNames.json";
import * as numberingSystems from "cldr-data/supplemental/numberingSystems.json";
import * as weekData from "cldr-data/supplemental/weekData.json";

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames, weekData);
L10n.load(config);
const Calendar = () => {
  return (
      <ScheduleComponent
        enableRtl
        locale="fa"
      >
        <Inject
          services={[Day, Week, WorkWeek, Agenda, Month, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
  );
};

export default Calendar;
