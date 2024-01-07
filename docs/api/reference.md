---
sidebar_position: 2
---

# Reference

## Errors

This API will always return a JSON object with two fields: `status` and `message`.

The `status` field will always be either `success` or `error` and the `message` field will contain a short human-readable description of the error.

```json
{
	"status": "error",
    "message": "Error message"
}
```

## Date / Time Format

All dates and times returned by the TravelMate API are from the GMT+1 timezone and follow the [ISO8601 format](https://www.loc.gov/standards/datetime/iso-tc154-wg5_n0038_iso_wd_8601-1_2016-02-16.pdf).